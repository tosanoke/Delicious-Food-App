import React from 'react'
import styled from 'styled-components'



export const 
Card = () => {
  return (
    <>
        <CardCtn>
            <img src={image} alt="" />
            <h4>{title}</h4>
        </CardCtn>

    </>
  )
}


const CardCtn = styled.div`
    max-width: 150px;
    width: 100%;
    
`
