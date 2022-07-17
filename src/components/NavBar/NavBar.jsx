import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  Image,
  Link,
  Spacer,
  useToast,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import logo from "../../assets/image/logo.png";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector , useDispatch} from "react-redux";
import { signOutRequest } from "../../redux/auth/actions";
export const NavBar = () => {
  const { token, user } = useSelector((store) => store.authReducer);
  const dispatch = useDispatch()
  const toast = useToast();
  const handleSignOut = () => {
    dispatch( signOutRequest(toast));
  };
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
      name: `${!!token ? "Sign Out" : "Sign In"}`,
      link: `${!!token ? "/signOut" : "/signIn"}`,
    },
  ];
  return (
    <>
      <Flex
        zIndex={2}
        position={"sticky"}
        top={"0px"}
        flexWrap={"wrap"}
        minWidth="max-content"
        alignItems="center"
        gap="2"
        p="1"
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
                if (ele.link == "/signOut") {
                  handleSignOut()
                  nav(`/`);
                  return;
                }
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
