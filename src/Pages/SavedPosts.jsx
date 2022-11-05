import { Box, Flex, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouteLoaderData } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import Posts from "../Components/Posts/Posts";
import Sidebar from "../Components/SideBar/Sidebar";
import { getSavedPostsAPI } from "../Redux/SavePosts/save.action";

const SavedPosts = () => {
  const dispatch = useDispatch();
  const { SavedPosts } = useSelector((state) => state.save);
  console.log("SavedPosts:", SavedPosts);

  const [pData, setPData] = useState([]);
  console.log("pData:", pData);

  let userData = JSON.parse(localStorage.getItem("LoginData"));
  let PostsData = SavedPosts.filter((el) => el.user_id === userData.id);
  console.log("PostsData:", PostsData);

  useEffect(() => {
    dispatch(getSavedPostsAPI());
  }, []);

  useEffect(() => {
    let arr = [];
    for (let i = 0; i < PostsData.length; i++) {
      let { posts } = PostsData[i];
      arr.push(posts[0]);
    }
    setPData(arr);
  }, []);
  return (
    <div>
      <Navbar></Navbar>
      <Box>
        <Flex gap="5px" id="SidebarBody">
          <Box id="sidebar" w={["3%", "5%", "15%"]}>
            <Sidebar></Sidebar>
          </Box>
          <Box w="15%">
            {/* <Text textAlign={"center"} mt="2" color="brown" w={["200%", "100%", "100%"]}>
              Saved Posts
            </Text> */}
          </Box>
          <Box w="35%">
            {pData.length > 0 &&
              pData.map((Item) => <Posts key={Item.id} Item={Item}></Posts>)}
          </Box>
          <Box w="25%"></Box>
        </Flex>
      </Box>
    </div>
  );
};

export default SavedPosts;
