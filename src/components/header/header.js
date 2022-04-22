import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Container>
      <Wrapper>
        <LogoHold to="/">MY PPLE</LogoHold>
        <Add to="/add">Create</Add>
      </Wrapper>
    </Container>
  );
};

export default Header;
const Add = styled(Link)`
  text-decoration: none;
  color: black;
  font-size: 15px;
  height: 30px;
  width: 80px;
  border-radius: 5px;
  border: 1px solid white;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  margin: 0px 10px;
`;
const LogoHold = styled(Link)`
  font-size: 30px;
  font-weight: bold;
  color: white;
  margin: 0px 10px;
  outline: none;
  text-decoration: none;
`;
const Wrapper = styled.div`
  width: 70%;
  height: 100%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #4d30e3;
`;
const Container = styled.div`
  height: 55px;
  width: 100%;
  /* background-color: purple; */
  display: flex;
  justify-content: center;
`;
