import { Box, Flex, Spinner } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../Components/Navbar/Navbar";
import Posts from "../Components/Posts/Posts";
import Sidebar from "../Components/SideBar/Sidebar";
import { getPostsAPI } from "../Redux/Posts/post.action";
import "./MainHomePage.css";

const MainHomePage = () => {
  const dispatch = useDispatch();
  const { isLoading, isError, PostsData } = useSelector((state) => state.post);
  console.log("PostsData:", PostsData);

  function refresData() {
    dispatch(getPostsAPI());
  }

  useEffect(() => {
    refresData();
  }, []);

  if (isLoading) {
    return (
      <Box w="fit-content" m="auto" mt="300px">
        <Spinner textAlign={"center"} size="xl" />
      </Box>
    );
  }
  if (isError)
    return <div style={{ textAlign: "center" }}>Something Went Wrong...</div>;
  return (
    <div>
      <Navbar></Navbar>
      <Box>
        <Flex gap="5px" id="SidebarBody">
          <Box id="sidebar" w={["3%", "5%", "15%"]}>
            <Sidebar></Sidebar>
          </Box>
          <Box w="15%"></Box>
          <Box w="35%">
            {PostsData.length > 0 &&
              PostsData.map((Item) => (
                <Posts key={Item.id} Item={Item}></Posts>
              ))}
          </Box>
          <Box w="25%"></Box>
        </Flex>
      </Box>
    </div>
  );
};

export default MainHomePage;
