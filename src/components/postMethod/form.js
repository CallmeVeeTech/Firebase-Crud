import React, { useState } from "react";
import styled from "styled-components";
import { addDoc, collection } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { db } from "../Base/base";

const Input = () => {
  const navigation = useNavigate();
  const [firstname, setFirstname] = useState();
  const [lastname, setLastname] = useState();
  const [company, setCompany] = useState();
  const [telephone, setTelephone] = useState();

  const submit = () => {
    addDoc(collection(db, "contact collection"), {
      firstname,
      lastname,
      company,
      telephone,
    });
    setFirstname("");
    setLastname("");
    setTelephone("");
    setCompany("");
    // navigation("/");
  };
  return (
    <Container>
      <Wrapper>
        <Top>
          <h2>Let's Know you!</h2>
        </Top>
        <Ihold>
          <div>Firstname</div>
          <input
            placeholder="Enter Firstname"
            value={firstname}
            onChange={(e) => {
              setFirstname(e.target.value);
            }}
          />
        </Ihold>
        <Ihold>
          <div>Lastname</div>
          <input
            placeholder="Enter Lastname"
            value={lastname}
            onChange={(e) => {
              setLastname(e.target.value);
            }}
          />
        </Ihold>
        <Ihold>
          <div>Company</div>
          <input
            placeholder="Enter Company"
            value={company}
            onChange={(e) => {
              setCompany(e.target.value);
            }}
          />
        </Ihold>
        <Ihold>
          <div>Phone</div>
          <input
            placeholder="Enter Phone"
            value={telephone}
            onChange={(e) => {
              setTelephone(e.target.value);
            }}
          />
        </Ihold>
        <Submit>
          <button onClick={submit}>Submit</button>
        </Submit>
      </Wrapper>
    </Container>
  );
};

export default Input;

const Ihold = styled.div`
  width: 80%;
  div {
    font-size: 15px;
    font-weight: 600;
    margin: 6px 0px;
  }
  input {
    height: 37px;
    font-size: 12px;
    border: none;
    border-radius: 5px;
    width: 100%;
    margin-bottom: 20px;
    box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
    background-color: white;
    outline: none;
  }
`;
const Submit = styled.div`
  height: 80px;
  width: 80%;
  margin-top: 10px;
  /* background-color: purple; */
  display: flex;
  justify-content: center;
  button {
    height: 40px;
    width: 125px;
    border-radius: 5px;
    outline: none;
    border: none;
    background-color: #4d30e3;
    color: white;
    font-size: 18px;
    font-weight: 600;
  }
`;
const Top = styled.div``;
const Wrapper = styled.div`
  width: 350px;
  /* height: 400px; */
  background-color: white;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;
const Container = styled.div`
  width: 100%;
  height: 100vh;
  /* background-color: greenyellow; */
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
