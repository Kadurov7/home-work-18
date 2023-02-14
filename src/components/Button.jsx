import React from 'react'
import styled from 'styled-components'

const Button = ({text, onClick, bgColor,color}) => {
  return (
    <ButtonStyle onClick={onClick} style={{backgroundColor:`${bgColor}`,color:`${color}`}} >{text}</ButtonStyle>
  )
}

export default Button;

const ButtonStyle = styled.button`

	box-shadow: 0px 10px 14px -7px #3e7327;
	background:linear-gradient(to bottom, #77b55a 5%, #72b352 100%);
	background-color:#77b55a;
	border-radius:5px;
	border:1px solid #4b8f29;
	display:inline-block;
	cursor:pointer;
	color:#ffffff;
	font-family:Arial;
	font-size:16px;
	font-weight:bold;
	padding:10px 24px;
	text-decoration:none;
	text-shadow:0px 1px 0px #5b8a3c;

    &&:hover {
	background:linear-gradient(to bottom, #72b352 5%, #77b55a 100%);
	background-color:#72b352;
}
    &&:active {
	position:relative;
	top:2.5px;
    background-color: red;
}

`