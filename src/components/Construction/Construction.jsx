import { Flex, Image } from "@chakra-ui/react";
import React from "react";
import construction from "../../assets/image/construction.jpg";
export const Construction = () => {
  return (
    <>
      <Flex justifyContent={"center"}>
        <Image w={"38.058%"} src={construction} />
      </Flex>
    </>
  );
};
