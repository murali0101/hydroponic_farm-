import { Box, Heading } from "@chakra-ui/react";
import React from "react";
import data from "../../data/db.json";
import { Contact } from "../ContactUs/Contact";
import { Device } from "./Device";
import { NeedForAutomationSystem } from "./NeedForAutomationSystem";

export const Technology = () => {
  const technology = data.technology;
  return (
    <>
      <Box m={5}>
        <Heading as="h2" size="3xl" mt={8} mb={8} textAlign={"center"} p={"20px 0px"}  bg={"#80d74226"} >
          Automated Farming System in India
        </Heading>
        <Box>
          {technology.map((ele, ind) => (
            <Device key={ind} props={ele} />
          ))}
        </Box>
        <NeedForAutomationSystem />
        <Contact />
      </Box>
    </>
  );
};
