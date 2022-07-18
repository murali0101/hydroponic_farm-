import { Box, Flex, Heading } from "@chakra-ui/react";
import React from "react";
import { DeviceCard } from "./DeviceCard";

export const Device = ({ props }) => {
  const { category, device } = props;
  return (
    <>
      <Box>
        <Heading  as='h2' size='xl' textAlign={"center"} mt={8} mb={8}>{category}</Heading>
        <Flex justifyContent={"center"} gap={5}>
          {device.map((ele, ind) => (
            <DeviceCard key={ind} props={ele} />
          ))}
        </Flex>
      </Box>
    </>
  );
};
