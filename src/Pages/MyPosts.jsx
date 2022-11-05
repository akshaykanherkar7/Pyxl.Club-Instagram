import { Box, Flex, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../Components/Navbar/Navbar";
import Posts from "../Components/Posts/Posts";
import Sidebar from "../Components/SideBar/Sidebar";
import { getPostsAPI } from "../Redux/Posts/post.action";

const MyPosts = () => {
  const [myPosts, setMyPosts] = useState([]);
  console.log("myPosts:", myPosts);
  const dispatch = useDispatch();

  const { PostsData } = useSelector((state) => state.post);
  console.log("PostsData:", PostsData);
  let userData = JSON.parse(localStorage.getItem("LoginData"));

  useEffect(() => {
    dispatch(getPostsAPI());
  }, []);

  useEffect(() => {
    let newMyPosts = PostsData.filter((el) => {
      if (el.user_id === userData.id) {
        return el;
      }
     
    });
    console.log("newMyPosts:", newMyPosts);
    setMyPosts(newMyPosts);
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
            <Text
              textAlign={"center"}
              mt="2"
              color="brown"
              w={["200%", "100%", "100%"]}
            >
              My Posts
            </Text>
          </Box>
          <Box w="35%">
            {myPosts.length > 0 &&
              myPosts.map((Item) => <Posts key={Item.id} Item={Item}></Posts>)}
          </Box>
          <Box w="25%"></Box>
        </Flex>
      </Box>
    </div>
  );
};

export default MyPosts;
