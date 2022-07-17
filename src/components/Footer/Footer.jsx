import { Box, Flex, Link, Text } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import React from "react";

export const Footer = () => {
  let content = [
    {
      name: "About Us",
      link: "/aboutUs",
    },
    {
      name: "Advertise",
      link: "/advertise",
    },
    {
      name: "Contact Us",
      link: "/contactUs",
    },
    {
      name: "Privacy & Terms",
      link: "/Privacy&Terms",
    },
  ];

  return (
    <>
      <Flex
        bg={"#000000"}
        p={3}
        fontSize={14}
        justifyContent={"space-around"}
        flexWrap={"wrap"}
      >
        <Box>
          {content.map((ele, ind) => (
            <Link
              key={ind}
              as={RouterLink}
              to={ele.link}
              color="#FFFFFF"
              m={"0px 8px"}
              _hover={{ color: "#81D742" }}
            >
              {ele.name}
            </Link>
          ))}
        </Box>
        <Text color="#FFFFFF">
          {` © Copyright 2022, `}
          <Link
            as={RouterLink}
            to="/"
            color="#81D742"
            textDecoration={"none"}
            _hover={{ color: "#9B2C2C" }}
          >
            Hydroponic Farm
          </Link>
          {` | All Rights Reserved.`}
        </Text>
      </Flex>
    </>
  );
};
