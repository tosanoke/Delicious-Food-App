import React from "react";
import { FaPizzaSlice, FaHamburger } from "react-icons/fa";
import { GiNoodles, GiChopsticks } from "react-icons/gi";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

function Category() {
  return (
    <List>
      <Slink to={"cuisine/italian"}>
        <FaPizzaSlice />
        <h4>Italian</h4>
      </Slink>
      <Slink to={"cuisine/american"}>
        <FaHamburger />
        <h4>American</h4>
      </Slink>
      <Slink to={"cuisine/thai"}>
        <GiNoodles />
        <h4>Thai</h4>
      </Slink>
      <Slink to={"cuisine/african"}>
        <GiChopsticks />
        <h4>African</h4>
      </Slink>
    </List>
  );
}

const Slink = styled(NavLink)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  text-decoration: none;
  background: linear-gradient(35deg, #494949, #313131);
  width: 6rem;
  height: 6rem;
  transform: scale(0.8);

  h4 {
    color: white;
    font-size: 1rem;
  }
  svg {
    color: white;
    font-size: 1.5rem;
  }
`;


const List = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem 0rem;

  /* Media Query for Mobile Devices */
  @media (max-width: 480px) {
    ${Slink} {
      width: 5rem;
      height: 5rem;
      h4 {
        font-size: 0.9rem;
      }
      svg {
        font-size: 1rem;
      }
    }
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    margin: 1rem 1rem;
  }
`;

export default Category;
