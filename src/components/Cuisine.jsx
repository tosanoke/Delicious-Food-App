import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import styled from "styled-components";
import axios from "axios";

function Cuisine() {
  const [cuisines, setCuisine] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { type } = useParams();

  const getCuisine = async (name) => {
    setIsLoading(true);
    const response = await axios(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${name}`
    );
    setCuisine(response.data.results);
    setIsLoading(false);
  };

  useEffect(() => {
    getCuisine(type);
  }, [type]);

  return (
    <>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <Grid
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          {cuisines.map((cuisine) => {
            return (
              <Card>
                <Link to={`/recipes/${cuisine.id}`}>
                  <img src={cuisine.image} alt="" />
                  <h4>{cuisine.title}</h4>
                </Link>
              </Card>
            );
          })}
        </Grid>
      )}
    </>
  );
}

const Grid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  gap: 3rem;
`;

const Card = styled.div`
  background: linear-gradient(35deg, #494949, #313131);
  border-radius: 2rem 2rem 0 0;
  max-width: 450px;
  width: 100%;
  box-shadow: rgb(255 255 255 / 10%) 0px 19px 38px,
    rgb(237 234 234 / 7%) 0px 15px 12px;

  img {
    width: 100%;
    border-radius: 2rem;
  }
  a {
    text-decoration: none;
  }
  h4 {
    text-align: center;
    padding: 1rem;
  }
`;

export default Cuisine;
