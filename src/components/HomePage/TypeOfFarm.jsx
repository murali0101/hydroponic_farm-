import { Box, Heading } from "@chakra-ui/react";
import React from "react";
import { FarmTypeCard } from "../FarmTypeCard/FarmTypeCard";
import { useSelector } from "react-redux";
export const TypeOfFarm = () => {
    const typeOfFarm = useSelector((store) => store.homePageReducer.typeOfFarm);
  return (
    <>
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
