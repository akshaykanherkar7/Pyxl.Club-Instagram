import { Image } from "@chakra-ui/react";
import React from "react";
import Navbar from "../Components/Navbar/Navbar";

const HomePage = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Image
        w={["100%", "100%", "100%"]}
        mt="1px"
        src="https://www.smatbot.com/blog/wp-content/uploads/2022/08/5ways%20to%20instagram%20main%20copy.jpg"
      ></Image>
    </div>
  );
};

export default HomePage;
