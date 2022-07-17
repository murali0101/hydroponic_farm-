import { Box, Heading, Image } from "@chakra-ui/react";
import React from "react";
import banner from "../../assets/image/banner.jpg";
import { FarmTypeCard } from "../FarmTypeCard/FarmTypeCard";
import { useSelector } from "react-redux";
export const HomePage = () => {
  const typeOfFarm = useSelector((store) => store.homePageReducer.typeOfFarm);
  console.log("typeOfFarm:", typeOfFarm);
  return (
    <>
      <Box>
        <Image src={banner} width={"100%"} objectFit="cover" />
      </Box>
      <Box m={4}>
        <Heading as="h2" size="xl" mb={3}>
          Setting up hydroponic farm infrastructure
        </Heading>
        {typeOfFarm.map((ele, ind) => (
          <FarmTypeCard key={ind} props={{ ele, ind }} />
        ))}
      </Box>
    </>
  );
};
