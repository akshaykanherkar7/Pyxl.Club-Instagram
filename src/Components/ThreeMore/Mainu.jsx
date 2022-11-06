import {
  Box,
  Grid,
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
  Text,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import React from "react";
import { useDispatch } from "react-redux";
import { deletePostAPI, getPostsAPI } from "../../Redux/Posts/post.action";
import {
  DELETE_POST_FAI,
  DELETE_POST_SUCC,
} from "../../Redux/Posts/post.actionTypes";

const Mainu = ({ Item }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const dispatch = useDispatch();
  const toast = useToast();

  let userData = JSON.parse(localStorage.getItem("LoginData"));

  const handleDeletePost = (id) => {
    dispatch(deletePostAPI(id)).then((res) => {
      if (res === DELETE_POST_SUCC) {
        dispatch(getPostsAPI());
        toast({
          title: "Post Successfully Deleted",
          status: "success",
          duration: 2000,
          isClosable: true,
        });
      } else if (res === DELETE_POST_FAI) {
        toast({
          title: "Failed to Delete Post",
          status: "error",
          duration: 2000,
          isClosable: true,
        });
      }
    });
  };

  return (
    <>
      <Box onClick={onOpen} w="fit-content" mt="3" ml="5">
        <i
          class="fa-solid fa-ellipsis"
          style={{ fontSize: "22px", cursor: "pointer" }}
        ></i>
      </Box>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent borderRadius={"12px"} width="380px" mt="200px">
          <ModalBody>
            <Box height="auto">
              <Grid h="100%" justifyContent={"center"}>
                <Text
                  mb="2"
                  mt="2"
                  textAlign={"center"}
                  color="#ee505d"
                  fontWeight={"bold"}
                  cursor="pointer"
                >
                  Report
                </Text>
                <hr style={{ width: "380px" }} />
                <Text
                  mb="2"
                  mt="2"
                  textAlign={"center"}
                  color="#ee505d"
                  fontWeight={"bold"}
                  cursor="pointer"
                >
                  Unfollow
                </Text>
                <hr style={{ width: "380px" }} />
                <Text
                  mb="2"
                  mt="2"
                  textAlign={"center"}
                  cursor="pointer"
                  onClick={
                    userData.id === Item.user_id
                      ? () => handleDeletePost(Item.id)
                      : null
                  }
                >
                  {userData.id === Item.user_id
                    ? "Delete Post"
                    : "Add to Favourites"}
                </Text>
                <hr style={{ width: "380px" }} />
                <Text mb="2" mt="2" textAlign={"center"} cursor="pointer">
                  Hide
                </Text>
                <hr style={{ width: "380px" }} />
                <Text mb="2" mt="2" textAlign={"center"} cursor="pointer">
                  Go to Post
                </Text>
                <hr style={{ width: "380px" }} />
                <Text mb="2" mt="2" textAlign={"center"} cursor="pointer">
                  Share to...
                </Text>
                <hr style={{ width: "380px" }} />
                <Text mb="2" mt="2" textAlign={"center"} cursor="pointer">
                  Copy link
                </Text>
                <hr style={{ width: "380px" }} />
                <Text mb="2" mt="2" textAlign={"center"} cursor="pointer">
                  Embed
                </Text>
                <hr style={{ width: "380px" }} />
                <Text
                  mb="2"
                  mt="2"
                  textAlign={"center"}
                  cursor="pointer"
                  onClick={onClose}
                >
                  Cancel
                </Text>
              </Grid>
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Mainu;
