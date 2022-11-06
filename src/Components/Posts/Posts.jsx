import {
  Box,
  Button,
  Flex,
  Image,
  Input,
  Text,
  useToast,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getLoginDataAPI } from "../../Redux/AuthReducer/auth.action";
import { likeAPI, postCommentAPI } from "../../Redux/Posts/post.action";
import {
  getSavedPostsAPI,
  savePostAPI,
} from "../../Redux/SavePosts/save.action";
import { SAVE_POST_SCC } from "../../Redux/SavePosts/save.actionTypes";
import Mainu from "../ThreeMore/Mainu";
import AllComments from "../ViewAllCmntModal/AllComments";
import "./Posts.css";

const Posts = ({ Item }) => {
  const [lastComments, setLastComments] = useState({
    ...Item.Comments[Item.Comments.length - 1],
  });
  const [likedData, setLikedData] = useState([...Item.Likes]);
  const [postCmnt, setPostCmnt] = useState("");
  let userData = JSON.parse(localStorage.getItem("LoginData"));
  // console.log("userData:", userData);
  const [CountFlag, setCountFlag] = useState(true);
  const [user, setUser] = useState({});
  console.log("user:", user);

  const dispatch = useDispatch();
  const toast = useToast();

  const { loginData } = useSelector((state) => state.auth);

  const handleLikebtn = (data) => {
    for (let i = 0; i < likedData.length; i++) {
      if (likedData[i].username === userData.username) {
        // return
      }
    }

    if (CountFlag) {
      data.countlikes = data.countlikes + 1;
      dispatch(likeAPI(data.id, data));
      setCountFlag(false);
    } else {
      data.countlikes = data.countlikes - 1;
      dispatch(likeAPI(data.id, data));
      setCountFlag(true);
    }
  };

  const handleAddComment = (Data) => {
    let payload = {
      user_id: userData.id,
      username: userData.username,
      comment: postCmnt,
      time: Date(),
    };
    Data.Comments.push(payload);
    console.log("Data:", Data);
    dispatch(postCommentAPI(Data.id, Data));
    setPostCmnt("");
  };

  const handleSavePost = (Data) => {
    let SavedPost = {
      user_id: userData.id,
      username: userData.username,
      posts: [],
    };
    SavedPost.posts.push(Data);
    dispatch(savePostAPI(SavedPost)).then((res) => {
      if (res === SAVE_POST_SCC) {
        dispatch(getSavedPostsAPI());
        toast({
          title: "Post Successfully Saved",
          status: "success",
          duration: 2000,
          isClosable: true,
        });
      } else {
        toast({
          title: "Failed to Save Post",
          status: "error",
          duration: 2000,
          isClosable: true,
        });
      }
    });
  };

  const getUserDetail = () => {
    for (let i = 0; i < loginData.length; i++) {
      if (loginData[i].id === Item.user_id) {
        setUser({ ...loginData[i] });
        return;
      }
    }
  };

  useEffect(() => {
    dispatch(getLoginDataAPI());
  }, []);
  useEffect(() => {
    getUserDetail();
  }, []);

  return (
    <div id="MainBox">
      <Box padding={"8px"} w={["100%", "100%", "100%"]}>
        <Flex gap="5px">
          <Box
            w="14%"
            padding={"4px"}
            h="45px"
            //   border={"1px solid black"}
          >
            <Image
              borderRadius={"30px"}
              // border="1px solid red"
              src={
                user.user_img
                  ? user.user_img
                  : "https://cdn-icons-png.flaticon.com/512/149/149071.png"
              }
              w="80%"
              h="100%"
              cursor={"pointer"}
            ></Image>
          </Box>
          <Box
            w="80%"
            h="45px"
            //   border={"1px solid black"}
          >
            <Text
              p="2px"
              mt="2.2%"
              ml="-2%"
              fontWeight={500}
              fontFamily={"body"}
              cursor="pointer"
            >
              {Item.username}
            </Text>
          </Box>
          <Box
            w="15%"
            h="45px"
            //   border={"1px solid black"}
          >
            {/* <Box w="fit-content" mt="2" ml="5">
              <i
                class="fa-solid fa-ellipsis"
                style={{ fontSize: "26px", cursor: "pointer" }}
              ></i>
            </Box> */}
            <Mainu Item={Item}></Mainu>
          </Box>
        </Flex>
      </Box>
      <Box h={"70%"}>
        <Image w="100%" height={"100%"} src={Item.img_url}></Image>
      </Box>
      <Box>
        <Box
          //   border="1px solid lightgray"
          w="100%"
          height={"60px"}
        >
          <Flex justifyContent={"space-between"}>
            <Box
              //   border="1px solid red"
              w="30%"
            >
              <Flex
                justifyContent={"space-evenly"}
                height={"100%"}
                alignItems="center"
              >
                <i
                  onClick={() => handleLikebtn(Item)}
                  class="fa-regular fa-heart"
                  id="likesharecommentbtn"
                  style={CountFlag ? null : { color: "pink" }}
                ></i>
                <i id="likesharecommentbtn" class="fa-solid fa-comment"></i>
                <i
                  id="likesharecommentbtn"
                  class="fa-solid fa-up-right-from-square"
                ></i>
              </Flex>
            </Box>
            <Box
              //   border="1px solid red"
              w="10%"
              height="60px"
              display={"flex"}
              alignItems="center"
            >
              <i
                onClick={() => handleSavePost(Item)}
                class="fa-regular fa-bookmark"
                style={{
                  fontSize: "24px",
                  width: "100%",
                  textAlign: "center",
                  cursor: "pointer",
                }}
              ></i>
            </Box>
          </Flex>
        </Box>
        <Box
          //   border="1px solid red"
          w={["20%", "20%", "20%"]}
          textAlign={"center"}
          fontSize="18px"
          mt="-9px"
        >
          {Item.countlikes} Likes
        </Box>
        <Text paddingLeft={["10px", "10px", "20px"]}>
          <span
            style={{ fontWeight: "bold", cursor: "pointer", color: "#484848" }}
          >
            {Item.username}{" "}
          </span>
          {Item.description}
        </Text>
        <Box
          //    border={"1px solid black"}
          mt="10px"
        >
          <AllComments Item={Item}></AllComments>
          <Text paddingLeft="20px">
            <span
              style={{
                fontWeight: "bold",
                cursor: "pointer",
                color: "#484848",
              }}
            >
              {lastComments.username}{" "}
            </span>
            {lastComments.comment}
          </Text>
          {/* <Text
          //  border={"1px solid red"}
          color="gray"
          paddingLeft="15px"
          cursor="pointer"
        >
          View all {Item.Comments.length} comments
        </Text> */}
        </Box>
      </Box>
      <Box borderTop="1px solid lightgray" h="50px" mt="8px" w="100%" p="6px">
        <Flex h="100%" gap="5px" alignItems={"center"}>
          <i
            class="fa-regular fa-face-smile"
            style={{ fontSize: "29px", cursor: "pointer" }}
          ></i>
          <Input
            type="string"
            border={"none"}
            h="80%"
            placeholder="Add a comment..."
            value={postCmnt}
            onChange={(e) => setPostCmnt(e.target.value)}
          ></Input>
          <Button
            id="postbtn"
            onClick={() => handleAddComment(Item)}
            color={"#21a3f6"}
            backgroundColor={"white"}
            disabled={postCmnt === ""}
            h="85%"
          >
            Post
          </Button>
        </Flex>
      </Box>
    </div>
  );
};

export default Posts;
