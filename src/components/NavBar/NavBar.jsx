import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  Image,
  Link,
  Spacer,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import logo from "../../assets/image/logo.png";
import React from "react";
import { useNavigate } from "react-router-dom";

export const NavBar = () => {
  const nav = useNavigate();
  let button = [
    {
      name: "Technology",
      link: "/technology",
    },
    {
      name: "Shop",
      link: "/shop",
    },
    {
      name: "Sign Up",
      link: "/signUp",
    },
    {
      name: "Sign In",
      link: "/signIn",
    },
  ];
  return (
    <>
      <Flex
        flexWrap={"wrap"}
        minWidth="max-content"
        alignItems="center"
        gap="2"
        p="2"
        bg="#ffff"
        boxShadow={
          " rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px"
        }
      >
        <Box>
          <Link as={RouterLink} to="/">
            <Image w={"80px"} objectFit="cover" src={logo} alt="logo" />
          </Link>
        </Box>
        <Spacer />
        <ButtonGroup gap="2">
          {button.map((ele, ind) => (
            <Button
              key={ind}
              onClick={() => {
            
                nav(`${ele.link}`);
              }}
            >
              {ele.name}
            </Button>
          ))}
        </ButtonGroup>
      </Flex>
    </>
  );
};