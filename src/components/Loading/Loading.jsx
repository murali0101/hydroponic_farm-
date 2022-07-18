import { Box, Flex, Spinner } from "@chakra-ui/react";
import React from "react";

export const Loading = () => {
  return (
    <>
      <Flex
        justifyContent={"center"}
        alignItems={"center"}
        h={"82.9vh"}
        w={"50%"}
        m={"auto"}
      >
        <Box transform="scale(1.5)">
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="#81D742"
            size="xl"
          />
        </Box>
      </Flex>
    </>
  );
};
