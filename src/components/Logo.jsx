import React from 'react'
import styled from "styled-components";
import {Link} from "react-router-dom";
import {GiKnifeFork} from 'react-icons/gi'

function Logo() {
  return (
   <Nav>
       <GiKnifeFork />
       <Logos  to={'/'}>Delicious</Logos>
   </Nav>
  )
}

const Logos = styled(Link)`
    text-decoration: none;
    font-size: 1.5rem;
    font-weight: 400;
    font-family: 'Lobster Two', cursive;
    color: white;

`
const Nav = styled.div`
    padding: 4rem 0rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    color: white;

    svg{
        font-size: 3rem;
    }
`

export default Logo

