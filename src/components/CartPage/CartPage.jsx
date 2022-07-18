import React, { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  Button,
  Flex,
  Grid,
  Heading,
  Spacer,
  Text,
  useToast,
} from "@chakra-ui/react";

import { getCartData } from "../../redux/cartPage/actions";
import { getItemFromLocal } from "../../utils/localStorage";
import { CartProductCard } from "./CartProductCard";
import { useNavigate } from "react-router-dom";
export const CartPage = () => {
  const cartProductData = useSelector(
    (store) => store.CartPageReducer.cartProductData
  );
  const nav = useNavigate();
  console.log("cartProductData:", cartProductData);
  const token = getItemFromLocal("token");

  const toast = useToast();
  const dispatch = useDispatch();
  const totalPrice = () => {
    return cartProductData?.reduce((t, c) => t + c.productId.price, 0);
  };
  useEffect(() => {
    dispatch(getCartData(token, toast));
  }, []);
  return (
    <>
      <Flex p={5} justifyContent="space-between" alignItems={"center"} >
        <Flex alignItems={"center"}>
          <Heading as="h3" size="lg">
            {`Total Price :-`}{" "}
          </Heading>

          <Text fontSize={25} ml={5} pt={2}>{`${
            cartProductData.length == 0 ? 0 : totalPrice()
          } Rs`}</Text>
        </Flex>
        <Button variant={"solid"} onClick={()=>{nav("/checkOut")}}>Check Out</Button>
      </Flex>
      <Grid gridTemplateColumns={"repeat(4,1fr)"} m={5} gap={6}>
        {cartProductData?.map((ele, ind) => (
          <CartProductCard key={ele._id} props={ele} />
        ))}
      </Grid>
    </>
  );
};
