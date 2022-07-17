import { Box } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import { SignIn } from "../components/auth/SignIn";
import { SignUp } from "../components/auth/SignUp";
import { Construction } from "../components/Construction/Construction";
import { HomePage } from "../components/HomePage/HomePage";

export const Router = () => {
  return (
    <>
      <Box>
        <Routes >
          <Route path="/" element={<HomePage />} />
          <Route path="/technology" element={<Construction />} />
          <Route path="/shop" element={<Construction />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/signIn" element={<SignIn/>} />
          <Route path="/aboutUs" element={<Construction />} />
          <Route path="/advertise" element={<Construction />} />
          <Route path="/contactUs" element={<Construction />} />
          <Route path="/Privacy&Terms" element={<Construction />} />
          <Route path="/farm-details" element={<Construction />} />
        </Routes>
      </Box>
    </>
  );
};
