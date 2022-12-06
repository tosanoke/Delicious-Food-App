import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {useParams} from 'react-router-dom'
import styled from 'styled-components'




function Recipe() {
    const [details, setDetails] = useState({})
    const [activeTab, setActiveTab] = useState("Instructions")
    const {name} = useParams();

   

    const getRecipeDetails = async () => {
      const response = await axios(`https://api.spoonacular.com/recipes/${name}/information?apiKey=${process.env.REACT_APP_API_KEY}`)
      setDetails(response.data)
     
    }

    useEffect(() => {
      getRecipeDetails()
    }, [name])

  return (
      <Detail>
          <div>
            <h2>{details.title}</h2>
            <img src={details.image} alt="" />
          </div>

          <Info>
            <Button 
            className={ activeTab === "Instructions" ? "active" : ""} 
            onClick={()=> setActiveTab('Instructions')} 
            
            >Ingredients</Button>
            <Button  
            className= { activeTab === "Ingredients" ? "active" : ""} 
            onClick={()=> setActiveTab("Ingredients")} 
            
            >Instructions</Button>

 {      /* if the activeTab is instructions render the uhtml content */}
            { activeTab === "Instructions" && (
              <div>
                <h3 dangerouslySetInnerHTML={{__html: details.summary}}></h3>
                <h3 dangerouslySetInnerHTML={{__html: details.Instructions}}></h3>
              </div>
              )
            }
          
          {/* if the activeTab is ingredients render the ul */}
          { activeTab === "Ingredients" && (
              <ul>
              {details.extendedIngredients.map((ingredient) => {
                return (
                <li key={ingredient.id}>
                  {ingredient.original}
                </li>
                )
              }  )}
            </ul>
             )
          }
          </Info>

      </Detail>
  )
}


const Detail = styled.div`
      margin-top: 10rem;
      margin-bottom: 5rem;
      display: flex;

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

`


const Button = styled.button`
      padding: 1rem 2rem;
      color: #313131;
      background: white;
      border: 2px solid white;
      margin-right: 2rem;
      font-weight: 600
` 

const Info = styled.div`
      margin-left: 10rem;
`

export default Recipe