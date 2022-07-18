import { Box, Button, Heading, Text } from '@chakra-ui/react';
import React from 'react'
import { useNavigate } from 'react-router-dom';

export const Contact = () => {
    const nav = useNavigate();
  return (
      <>
           <Box m={10} bg={"#80d74226"} padding={"10px 30px"}>
        <Heading as="h4" size="sm" m={"5px 0px"}>
          HOW TO GET STARTED?
        </Heading>
        <Text mt={3} fontSize={18} lineHeight={7}>
          {" "}
          It's very simple.
          <br />
          Call us at +91-9959007092 or email us at muralimv0101@gmail.com
          <br />
          Your call or email will be automatically routed to the available
          Relationship Manager, who will be more than happy to assist you. ​
          <br />
          Alternatively, you can click on the contact us button below to connect
          with us.
        </Text>
        <Box textAlign={"center"} mt={5} mb={3} >
        <Button
          
          onClick={() => {
            nav("/contactUs");
          }}
        >
          Contact Us
        </Button>
        </Box>
      </Box>
    </>
  )
}
