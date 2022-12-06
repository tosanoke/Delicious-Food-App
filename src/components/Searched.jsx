import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import {Link} from "react-router-dom";

function Searched() {
  const [searchCuisine, setSearchCuisine] = useState([]);
  const { search } = useParams();

  const searchQuery = async (name) => {
    const response = await axios(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${name}`
    );
    setSearchCuisine(response.data.results);
  };

  useEffect(() => {
    searchQuery(search);
  }, [search]);

  return (
    <Grid>
      {searchCuisine.map((cuisine) => {
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
  )
}

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  gap: 3rem;
`;

const Card = styled.div`
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
export default Searched;
