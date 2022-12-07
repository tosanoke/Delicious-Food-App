import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import styled from "styled-components";

function Recipe() {
  const [details, setDetails] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [activeTab, setActiveTab] = useState("Instructions");
  const { name } = useParams();

  const getRecipeDetails = async () => {
    setIsLoading(true);
    try {
      const response = await axios(
        `https://api.spoonacular.com/recipes/${name}/information?apiKey=${process.env.REACT_APP_API_KEY}`
      );
      setDetails(response.data);
      setIsLoading(false);
    } catch (error) {
      setIsError(true);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getRecipeDetails();
  }, [name]);

  return (
    <>
      {isError && <h1>Ooops! Something went wrong</h1>}

      {isLoading && !isError && <h1>Loading...</h1>}

      {!isLoading && !isError && (
        <Detail>
          <ImgCtn>
            <h2>{details.title}</h2>
            <img src={details.image} alt="" />
          </ImgCtn>

          <Info>
            <BtnClass>
              <Button
                className={activeTab === "Instructions" ? "active" : ""}
                onClick={() => setActiveTab("Instructions")}
              >
                Ingredients
              </Button>
              <Button
                className={activeTab === "Ingredients" ? "active" : ""}
                onClick={() => setActiveTab("Ingredients")}
              >
                Instructions
              </Button>
            </BtnClass>

            {/* if the activeTab is instructions render the uhtml content */}
            {activeTab === "Instructions" && (
              <div>
                <h3 dangerouslySetInnerHTML={{ __html: details.summary }}></h3>
                <h3
                  dangerouslySetInnerHTML={{ __html: details.Instructions }}
                ></h3>
              </div>
            )}

            {/* if the activeTab is ingredients render the ul */}
            {activeTab === "Ingredients" && (
              <ul>
                {details.extendedIngredients.map((ingredient) => {
                  return <li key={ingredient.id}>{ingredient.original}</li>;
                })}
              </ul>
            )}
          </Info>
        </Detail>
      )}
    </>
  );
}

const Info = styled.div`
  /* margin-left: 10rem; */
`;
const BtnClass = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
  margin-bottom: 2rem;
`;

const ImgCtn = styled.div`
  width: 100%;
  max-width: 450px;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  img {
    width: 100%;
    height: auto;
  }
  @media (max-width: 480px) {
    max-width: 300px;
    width: 100%;
  }
`;

const Detail = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: flex-start;

      .active{
        background: linear-gradient(35deg, #494949, #313131);
        color: white;
      }

      h2{
        margin-bottom: 2rem;
        font-size: 1rem;

      }

      li{
        font-size: 1.2rem
        line-height: 2.5rem;

      }

      ul{
        margin-top: 2rem;
      }

  @media (max-width: 480px) {
    display: grid;
    grid-template-columns: 1fr;
    gap: 2rem;
  
    ${Info} {
    width: 90%;
    margin: auto;
    }

    h3 {
      font-size: 1rem;
    }
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    display: flex;
    gap: 1rem;
    flex-direction: column;
    align-items: center;
    ${Info} {
    width: 90%;
    margin: auto;
    }
  }
`;

const Button = styled.button`
  padding: 1rem 2rem;
  color: #313131;
  background: white;
  border: 2px solid white;
  margin-right: 2rem;
  font-weight: 600;
`;

export default Recipe;
