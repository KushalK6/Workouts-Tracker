import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import LogoImg from "../utils/Images/Logo.png";
import { Link as LinkR, NavLink } from "react-router-dom";
import { MenuRounded } from "@mui/icons-material";
import { Avatar } from "@mui/material";
import { useDispatch } from "react-redux";
import { logout } from "../redux/reducers/userSlice";
import "@fontsource/poppins"; // Importing the Poppins font

const gradientAnimation = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const Nav = styled.div`
  background: linear-gradient(90deg, #007AFF, #5B86E5);
  background-size: 200% 200%;
  animation: ${gradientAnimation} 5s ease infinite;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
  color: white;
  border-bottom: 1px solid ${({ theme }) => theme.text_secondary + 20};
  font-family: 'Poppins', sans-serif;
`;

const NavContainer = styled.div`
  width: 100%;
  max-width: 1400px;
  padding: 0 24px;
  display: flex;
  gap: 14px;
  align-items: center;
  justify-content: space-between;
  font-size: 1rem;
`;

const Logo = styled.img`
  height: 42px;
`;

const Mobileicon = styled.div`
  color: ${({ theme }) => theme.white};
  display: none;
  @media screen and (max-width: 768px) {
    display: flex;
    align-items: center;
  }
`;

const MobileMenu = styled.div`
  display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
  flex-direction: column;
  gap: 20px;
  @media screen and (min-width: 769px) {
    display: none;
  }
`;

const UserContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const TextButton = styled.button`
  background: none;
  border: none;
  color: ${({ theme }) => theme.white};
  cursor: pointer;
  font-size: 1rem;
  &:hover {
    color: ${({ theme }) => theme.black};
  }
`;

const NavItems = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const NavLogo = styled(LinkR)`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 0 6px;
  font-weight: 600;
  font-size: 18px;
  text-decoration: none;
  color: ${({ theme }) => theme.white};
  &:hover {
    color: ${({ theme }) => theme.black};
  }
`;

const NavLinkStyled = styled(NavLink)`
  color: ${({ theme }) => theme.white};
  text-decoration: none;
  &:hover {
    color: ${({ theme }) => theme.black};
  }
`;

const Navbar = ({ currentUser }) => {
  const dispatch = useDispatch();
  const [isOpen, setisOpen] = useState(false);
  return (
    <Nav>
      <NavContainer>
        <Mobileicon onClick={() => setisOpen(!isOpen)}>
          <MenuRounded sx={{ color: "inherit" }} />
        </Mobileicon>
        <NavLogo to="/">
          <Logo src={LogoImg} />
          Health Monitor
        </NavLogo>

        <MobileMenu isOpen={isOpen}>
          <NavLinkStyled to="/">Dashboard</NavLinkStyled>
          <NavLinkStyled to="/workouts">Workouts</NavLinkStyled>
          <NavLinkStyled to="/tutorials">Tutorials</NavLinkStyled>
          <NavLinkStyled to="/blogs">Blogs</NavLinkStyled>
          <NavLinkStyled to="/contact">Contact</NavLinkStyled>
        </MobileMenu>

        <NavItems>
          <NavLinkStyled to="/">Dashboard</NavLinkStyled>
          <NavLinkStyled to="/workouts">Workouts</NavLinkStyled>
          <NavLinkStyled to="/tutorials">Tutorials</NavLinkStyled>
          <NavLinkStyled to="/blogs">Blogs</NavLinkStyled>
          <NavLinkStyled to="/contact">Contact</NavLinkStyled>
        </NavItems>

        <UserContainer>
          <Avatar src={currentUser?.img}>{currentUser?.name[0]}</Avatar>
          <TextButton onClick={() => dispatch(logout())}>Logout</TextButton>
        </UserContainer>
      </NavContainer>
    </Nav>
  );
};

export default Navbar;