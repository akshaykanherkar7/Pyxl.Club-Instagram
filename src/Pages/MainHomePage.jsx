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
          <Box w="15%">
            <Sidebar></Sidebar>
          </Box>
          <Box border="1px solid lightgray" w="85%"></Box>
        </Flex>
      </Box>
    </div>
  );
};

export default MainHomePage;
