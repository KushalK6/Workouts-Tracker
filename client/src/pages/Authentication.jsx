import React, { useState } from "react";
import styled from "styled-components";
import LogoImage from "../utils/Images/Logo.png";
import AuthImage from "../utils/Images/AuthImage.jpg";
import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";

const Container = styled.div`
  flex: 1;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: url(${AuthImage}) no-repeat center center;
  background-size: cover;
  position: relative;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.7); /* Darker overlay */
    z-index: 1;
  }
`;

const Logo = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  position: absolute;
  top: 20px;
  left: 20px;
  z-index: 10;
  transition: transform 0.3s ease;
  &:hover {
    transform: scale(1.1);
  }
`;

const Right = styled.div`
  flex: 1;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  padding: 40px;
  gap: 24px;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.9); /* More opaque background */
  border-radius: 12px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  z-index: 2; /* Bring the login details to the foreground */
`;

const Text = styled.div`
  font-size: 18px;
  text-align: center;
  color: ${({ theme }) => theme.text_secondary};
  margin-top: 16px;
  @media (max-width: 400px) {
    font-size: 16px;
  }
`;

const TextButton = styled.span`
  color: ${({ theme }) => theme.primary};
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: 600;
  &:hover {
    text-decoration: underline;
  }
`;

const Authentication = () => {
  const [login, setLogin] = useState(false);
  console.log("here")
  return (
    <Container>
      <Logo src={LogoImage} />
      <Right>
        {!login ? (
          <>
            <SignIn />
            <Text>
              Don't have an account?{" "}
              <TextButton onClick={() => setLogin(true)}>Sign Up</TextButton>
            </Text>
          </>
        ) : (
          <>
            <SignUp />
            <Text>
              Already have an account?{" "}
              <TextButton onClick={() => setLogin(false)}>Sign In</TextButton>
            </Text>
          </>
        )}
      </Right>
    </Container>
  );
};

export default Authentication;