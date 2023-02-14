import React, { useState } from 'react'
import {useDispatch} from "react-redux"
import { useNavigate } from 'react-router-dom';
import { authActionTypes } from '../store/auth/authReducer';
import styled from "styled-components"

const Auth = () => {
 
 const dispatch = useDispatch();
 const navigate = useNavigate();

 const [formState, setForm] = useState({
    email:"",
    password:"",
 })


const inputChangeHandler = (name)=>{
    return(event)=> {
       setForm((prevState)=>({...prevState,[name]:event.target.value}))
    }
}

 const submitHandler =(event)=>{
      event.preventDefault();
      if(formState.email.includes("@") && formState.password.length > 6) {
         dispatch({
            type: authActionTypes.LOG_IN,
            payload: formState.email,
         })
  navigate ("/todo");

      }
 }


  return (
    <Main>
        <section>
            <form onSubmit={submitHandler}>
                <Container>
                    <label htmlFor="email">Email</label>
                    <input 
                          type="email" 
                          id='email'
                          onChange={inputChangeHandler("email")}
                          value={formState.email} />
                </Container>
                <Container>
                    <label htmlFor="password">Password</label>
                    <input 
                          type="password" 
                          id='password'
                          onChange={inputChangeHandler("password")}
                          value={formState.password} />
                </Container>
                <Button>LOGIN</Button>
            </form>
        </section>
    </Main>
  )
}

export default Auth;

const Main = styled.main`
  margin: 5rem auto;
  box-shadow: 3px 1px 8px rgba(3, 9, 0, 0.2);
  width: 25rem;
  border-radius: 8px;
  padding: 1rem;
  text-align: center;
  background-color: #07775b;
  border: 2px solid #05752a;
`
const Container = styled.div`
  margin-bottom: 0.5rem;

  label{
  display: flex;
  margin-left:2.3rem;
  color: #000000;
  text-transform: uppercase;
  margin-bottom: 0.5rem;
  color: white;
  }
  input{
  display: block;
  width: 20rem;
  margin: auto;
  border-radius: 4px;
  padding: 0.25rem;
  border: 1px solid #ccc;
  margin-bottom: 1rem;
  }
`
const Button = styled.button`
    padding: 10px 27px;
    background-color: #053a0c;
    border: none;
    border-radius: 8px;
    color: white;
    &&:hover{
     background-color: #066d3d;
    }
    &&:active{
        background-color: white;
        color: black;
    }
`   