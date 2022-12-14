import React, { useState} from 'react';
import { FaSearch } from 'react-icons/fa'
import styled from 'styled-components'
import {useNavigate} from 'react-router-dom'

function Search() {
    const [input, setInput] = useState("");
    const navigate = useNavigate()


    const handleSubmit = (e) => {
        e.preventDefault();
        navigate(`/searched/${input}`)
    }
    
  return (
    <FormStyle onSubmit={handleSubmit}>
        <FaSearch />
        <input 
        type="text" 
        value={input}
        onChange={e=> setInput(e.target.value)}
        />
    </FormStyle>
  )
}

const FormStyle = styled.form`
        margin: 0rem 15rem;
        position: relative;
      
        input{
            border: none;
            background: linear-gradient(35deg, #494949, #313131);
            font-size: 1.5em;
            color: white;
            padding: 1rem 3rem;
            border: none;
            border-radius: 1rem;
            outline: none;
            width: 100%
        }

        svg{
            position: absolute;
            top: 50%;
            left: 0%;
            transform: translate(100%, -50%);
            color: white;
           
        }

        /* Media Query for Mobile Devices */
        @media (max-width: 480px) {
            margin: 0rem 1rem;
        }

        @media(min-width: 481px) and  (max-width: 768px) {
            margin: 0rem 1rem;
        }
        @media (min-width: 769px) and (max-width: 1024px){
            margin: 0rem 1rem;
        }

`

export default Search