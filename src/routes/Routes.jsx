import { Box } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import { SignIn } from "../components/auth/SignIn";
import { SignUp } from "../components/auth/SignUp";
import { Construction } from "../components/Construction/Construction";
import { HomePage } from "../components/HomePage/HomePage";
import { ShopPage } from "../components/ShopPage/ShopPage";
import { Private } from "./PrivateRoute";
import { CartPage } from "../components/CartPage/CartPage";
import { ContactUs } from "../components/ContactUs/ContactUs";
import { Technology } from "../components/Technology/Technology";

export const Router = () => {
  return (
    <>
      <Box>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/technology" element={<Technology />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route
            path="/cart"
            element={
              <Private>
                <CartPage />
              </Private>
            }
          />
          <Route path="/checkOut" element={<Construction />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/signIn" element={<SignIn />} />
          <Route path="/aboutUs" element={<Construction />} />
          <Route path="/advertise" element={<Construction />} />
          <Route path="/contactUs" element={<ContactUs/>} />
          <Route path="/Privacy&Terms" element={<Construction />} />
          <Route path="/farm-details" element={<Construction />} />
        </Routes>
      </Box>
    </>
  );
};
