import { Box, Button, Flex, Image, Input, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  likeAPI,
  postCommentAPI,
} from "../../Redux/Posts/post.action";
import AllComments from "../ViewAllCmntModal/AllComments";
import "./Posts.css";

const Posts = ({ Item }) => {
  const [lastComments, setLastComments] = useState({
    ...Item.Comments[Item.Comments.length - 1],
  });
  const [likedData, setLikedData] = useState([...Item.Likes]);
  const [postCmnt, setPostCmnt] = useState("");
  let userData = JSON.parse(localStorage.getItem("LoginData"));
  console.log("userData:", userData);
  const [CountFlag, setCountFlag] = useState(true);

  const dispatch = useDispatch();

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
    };
    Data.Comments.push(payload);
    console.log("Data:", Data);
    dispatch(postCommentAPI(Data.id, Data));
    setPostCmnt("");
  };

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
              src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
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
              mt="2%"
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
            <Box w="fit-content" mt="2" ml="5">
              <i
                class="fa-solid fa-ellipsis"
                style={{ fontSize: "26px", cursor: "pointer" }}
              ></i>
            </Box>
          </Box>
        </Flex>
      </Box>
      <Box h={"70%"}>
        <Image w="100%" height={"100%"} src={Item.img_url}></Image>
      </Box>
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
      >
        {Item.countlikes} Likes
      </Box>
      <Box
        //    border={"1px solid black"}
        mt="10px"
      >
        <Text paddingLeft="15px">
          <span
            style={{ fontWeight: "bold", cursor: "pointer", color: "#484848" }}
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
        <AllComments Item={Item}></AllComments>
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
            onClick={() => handleAddComment(Item)}
            colorScheme={"teal"}
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
