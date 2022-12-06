import React, { useEffect, useState} from "react";
import axios from "axios";
import styled from 'styled-components'
import {Splide, SplideSlide} from '@splidejs/react-splide';
import "@splidejs/splide/dist/css/splide.min.css";
import {Link} from 'react-router-dom'

function Veggie() {
  const [veggie, setVeggie] = useState([])
   
   
  const getVeggie=   async () => {
      const dataExists = localStorage.getItem('veggie');

      if(dataExists) {
        setVeggie(JSON.parse(dataExists));
      } else{
          const api = await axios(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9&tags=vegetarian`);
          localStorage.setItem('veggie', JSON.stringify(api.data.recipes))
          setVeggie(api.data.recipes);
          console.log(veggie);
      }
     
}

  useEffect(()=> {
    getVeggie()
  }, [])

 

  return (
    <div>
    <Wrapper>
        <h3>Our Vegetarian Picks</h3>
        <Splide options={{
            perPage: 3,
            arrows: true,
            pagination: false,
            drag: "free",
            gap: "2rem",
            mediaQuery: 'min' | 'max',
            breakpoints: {
                480:{
                    perPage: 1,
                },
                769:{
                    perPage: 2,
                }
            }
            
            }}> 
            { veggie.map((recipe) => {
                return (
                    <SplideSlide key={recipe.id}>
                        <Card>
                        <Link to={`/recipes/${recipe.id}`}>
                            
                            <Gradient />
                            <p>{recipe.title}</p>
                            <img src={recipe.image} alt={recipe.title} />
                          
                        </Link>
                            
                        </Card>
                    </SplideSlide>
                )
            })}
        </Splide>
    </Wrapper>    
</div>
  )
}

const Wrapper = styled.div`
    margin: 4rem 0rem;
`
const Card = styled.div`
    min-height: 250px;
    border-radius: 2rem;
    overflow: hidden;
    position: relative;

    

    img {
        border-radius: 2rem;
        position: absolute;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;

       
    }

    p{
        position: absolute;
        z-index: 2;
        left: 50%;
        bottom: 0%;
        transform: translate(-50%, 0%);
        color: white;
        width: 100%;
        text-align: center;
        font-weight: 800;
        font-size: 1.1rem;
        height: 40%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`

const Gradient = styled.div`
        z-index: 1;
        position: absolute;
        width: 100%;
        height: 100%;
        background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.4))


`

export default Veggie