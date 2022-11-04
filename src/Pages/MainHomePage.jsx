import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Sidebar from "../Components/SideBar/Sidebar";

const MainHomePage = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Box>
        <Flex >
          <Box w={["3%","5%","15%"]}>
            <Sidebar></Sidebar>
          </Box>
          <Box w="85%"></Box>
        </Flex>
      </Box>
    </div>
  );
};

export default MainHomePage;
