import { Box, Image } from "@chakra-ui/react";
import React from "react";
import banner from "../../assets/image/banner.jpg";

export const Banner = () => {
    
  return (
    <>
      <Box overflow={"hidden"}>
        <Image src={banner} width={"100%"} objectFit="cover" className="zoom" />
      </Box>
    </>
  );
};
