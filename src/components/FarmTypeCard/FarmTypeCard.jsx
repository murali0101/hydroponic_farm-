import { Box, Flex, Heading, Image, Link, Text } from "@chakra-ui/react";
import React from "react";
import { Link as RouterLink } from "react-router-dom";
export const FarmTypeCard = ({ props }) => {
  const { name, description, image } = props.ele;

  return (
    <>
      <Flex p={5} m={2}>
        <Box flex={3}>
          <Link
          
            as={RouterLink}
            to="/farm-details"
            _hover={{ color: "#81D742", textDecoration: "none" }}
          >
            <Heading as="h4" size="md" mb={2}>{`${
              props.ind + 1
            }) ${name}`}</Heading>
          </Link>

          <Text>{description}</Text>
        </Box>
        <Box ml={2} flex={1} overflow="hidden">
          <Image src={image} w={"100%"} className="zoom" />
        </Box>
      </Flex>
    </>
  );
};
