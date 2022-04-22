import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { getDocs, collection, onSnapshot } from "firebase/firestore";
// import { addDoc, collection } from "firebase/firestore";-+
import { db } from "../Base/base";

const Contact = () => {
  const [view, setView] = useState([]);
  const [snapUser, setSnapUser] = useState([]);
  const getall = async () => {
    const data = await getDocs(collection(db, "contact collection"));
    setView(data.docs.map((el) => ({ ...el.data(), id: el.id })));
  };

  const snapShot = async () => {
    const user = collection(db, "contact collection");
    onSnapshot(user, (snapshot) => {
      const r = [];
      snapshot.forEach((doc) => {
        r.push({ ...doc.data(), id: doc.id });
        console.log(r);
      });
      setSnapUser(r);
    });
    console.log(user);
  };
  const displayColor = ["red", "blue", "orange", "cyan", "purple"];

  const randyColor = () => {
    return Math.floor(Math.random() * displayColor.length);
  };

  useEffect(() => {
    getall();
    snapShot();
  }, []);
  return (
    <Container>
      <Top>
        <h2>Contacts</h2>
      </Top>
      <Wrapper>
        {snapUser?.map((props) => (
          <Box key={props.id}>
            <Company>{props.company}</Company>
            <Detail>
              <LogoDiv style={{ backgroundColor: displayColor[randyColor()] }}>
                {props.firstname.charAt(0).toUpperCase()}
              </LogoDiv>
              <Name>
                <span>{props.firstname}</span>
                <span>{props.lastname}</span>
              </Name>
              <Tel>
                <span>{props.telephone}</span>
              </Tel>
            </Detail>
          </Box>
        ))}
      </Wrapper>
    </Container>
  );
};

export default Contact;

const Company = styled.div`
  width: 88%;
  display: flex;
  justify-content: flex-end;
  font-size: 11px;
  font-weight: 500;
`;
const Detail = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
const Tel = styled.div`
  span {
    font-size: 15px;
  }
`;
const Name = styled.div`
  width: 140px;
  display: flex;
  justify-content: space-between;
  span {
    font-size: 17px;
    font-weight: 600;
  }
`;

const LogoDiv = styled.div`
  height: 50px;
  width: 50px;
  border-radius: 100%;
  background-color: lightskyblue;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  font-weight: bold;
`;
const Box = styled.div`
  height: 100px;
  width: 50%;
  /* background-color: cyan; */
  /* margin: 20px 0px; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
`;
const Top = styled.div`
  width: 35%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  button {
    height: 45px;
    width: 45px;
    border-radius: 100%;
    font-size: 40px;
    outline: none;
    background-color: white;
    border: 1px solid black;
  }
`;
const Wrapper = styled.div`
  width: 70%;
  /* height: 500px; */
  /* background-color: orange; */
  display: grid;
  grid-gap: 10%;
  justify-items: center;
  grid-template-columns: repeat(1, minmax(0, 1fr));
`;
const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 20px;
`;
