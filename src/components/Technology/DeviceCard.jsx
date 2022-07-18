import { Box, Heading, Image } from "@chakra-ui/react";
import React from "react";

export const DeviceCard = ({ props }) => {
  const { name, image } = props;
  return (
    <>
      <Box>
        <Box>
          <Image src={image}></Image>
        </Box>
        <Heading as="h5" size="sm" textAlign={"center"}  mt={3}>
          {name}
        </Heading>
      </Box>
    </>
  );
};
