import { Flex, Image } from "@chakra-ui/react";
import React from "react";
import construction from "../../assets/image/construction.jpg";
export const Construction = () => {
  return (
    <>
      <Flex justifyContent={"center"}>
        <Image w={"36.6%"} src={construction} mt={"5px"} mb={"5px"} />
      </Flex>
    </>
  );
};
