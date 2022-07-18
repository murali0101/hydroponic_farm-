import React from "react";

import { Contact } from "../ContactUs/Contact";
import { Banner } from "./Banner";
import { TypeOfFarm } from "./TypeOfFarm";

export const HomePage = () => {
  return (
    <>
      <Banner />
      <TypeOfFarm />
      <Contact />
    </>
  );
};
