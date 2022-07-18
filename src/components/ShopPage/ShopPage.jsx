import React, { useEffect } from "react";
import { ShopProductCard } from "./ShopProductCard";
import { useSelector, useDispatch } from "react-redux";
import { Grid,useToast } from "@chakra-ui/react";
import { getProductData } from "../../redux/shopPage/actions";
import { Loading } from "../Loading/Loading";
export const ShopPage = () => {
  const product = useSelector((store) => store.ShopPageReducer.product);
  console.log("product:", product);
  const dispatch = useDispatch();
  const toast = useToast();
  useEffect(() => {
    dispatch(getProductData(toast));
  }, []);
 
  return (
    <>
      { product.length == 0 ? (
        <Loading />
      ) : (
        <>
          <Grid gridTemplateColumns={"repeat(4,1fr)"} m={5} gap={6}>
            {product?.map((ele, ind) => (
              <ShopProductCard key={ind} props={ele} />
            ))}
          </Grid>
        </>
      )}
    </>
  );
};
