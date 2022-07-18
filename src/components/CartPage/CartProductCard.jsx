import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Text,
  useToast,
} from "@chakra-ui/react";
import React from "react";

import { getItemFromLocal } from "../../utils/localStorage";
import { useSelector, useDispatch } from "react-redux";
import { removeToCartRequest } from "../../redux/cartPage/actions";
export const CartProductCard = ({ props }) => {
  const { name, image, price } = props.productId;
  const token = getItemFromLocal("token");
  

  const toast = useToast();
  const dispatch = useDispatch();
  const handleRemoveToCart = () => {
    dispatch(removeToCartRequest(props._id, token, toast));
  };
  return (
    <>
      <Box
        boxShadow="rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px"
        borderRadius={"20px"}
        textAlign="center"
      >
        <Box overflow={"hidden"}>
          <Image
            src={image}
            className="zoom"
            boxSize={"313px"}
            borderRadius={"20px 20px 0px 0px"}
            objectFit="cover"
          ></Image>
        </Box>
        <Heading as="h4" size="md" m={1}>
          {name}
        </Heading>
        <Flex
          m={"0px 5px"}
          alignItems="center"
          p={"0px 20px 10px"}
          justifyContent="center"
        >
          <Heading as="h6" fontSize={16}>
            {" "}
            {`Price :-`}
          </Heading>
          <Text fontSize={14} ml={2} mt={1}>{`₹${price}`}</Text>
        </Flex>
        <Button mb={2} onClick={handleRemoveToCart}>
          Remove To Cart
        </Button>
      </Box>
    </>
  );
};
