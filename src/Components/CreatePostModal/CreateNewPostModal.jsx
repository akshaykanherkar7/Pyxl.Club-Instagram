import {
  Box,
  Button,
  Center,
  Flex,
  FormControl,
  FormLabel,
  HStack,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  Text,
  Textarea,
  useColorModeValue,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createPostAPI, getPostsAPI } from "../../Redux/Posts/post.action";
import { CREATE_POST_SUCC } from "../../Redux/Posts/post.actionTypes";

const CreateNewPostModal = ({ handleCreate, path }) => {
  const [imgUrl, setImgUrl] = useState("");
  const [Desc, setDesc] = useState("");

  const dispatch = useDispatch();
  const toast = useToast();

  let userData = JSON.parse(localStorage.getItem("LoginData"));
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleCreatePost = () => {
    let post = {
      img_url: imgUrl,
      description: Desc,
      username: userData.username,
      countlikes: 0,
      Comments: [],
      Likes: [],
    };
    console.log(post);
    dispatch(createPostAPI(post)).then((res) => {
      if (res === CREATE_POST_SUCC) {
        dispatch(getPostsAPI());
        toast({
          title: "Post Successfully Posted",
          status: "success",
          duration: 2000,
          isClosable: true,
        });
        onClose();
      } else {
        toast({
          title: "Failed to Post Post",
          status: "error",
          duration: 2000,
          isClosable: true,
        });
      }
    });
  };

  return (
    <>
      <div onClick={onOpen}>
        <span id="visible">
          <i class="fa-regular fa-square-plus"></i>
        </span>
        <span
          style={path === "create" ? { fontWeight: "bold" } : null}
          onClick={handleCreate}
          id="hide"
        >
          Create
        </span>
      </div>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent h="auto" w="auto">
          <ModalHeader textAlign={"center"}>Create new post</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Flex align={"center"} justify={"center"}>
              <Stack spacing={1} mx={"auto"} maxW={"lg"} py={2} px={1}>
                <Box
                  rounded={"lg"}
                  bg={useColorModeValue("white", "gray.700")}
                  p={2}
                >
                  <Stack spacing={4}>
                    <FormControl id="image" isRequired>
                      <FormLabel>Image URL</FormLabel>
                      <Input
                        type="string"
                        value={imgUrl}
                        onChange={(e) => setImgUrl(e.target.value)}
                      />
                    </FormControl>
                    <FormControl id="username">
                      <FormLabel>Description</FormLabel>
                      <Textarea
                        type="string"
                        value={Desc}
                        onChange={(e) => setDesc(e.target.value)}
                      />
                    </FormControl>
                    <Stack spacing={10} pt={2}>
                      <Button
                        loadingText="Submitting"
                        size="lg"
                        bg={"blue.400"}
                        color={"white"}
                        _hover={{
                          bg: "blue.500",
                        }}
                        onClick={handleCreatePost}
                      >
                        Post
                      </Button>
                    </Stack>

                    <Stack pt={6}></Stack>
                  </Stack>
                </Box>
              </Stack>
            </Flex>
          </ModalBody>

          {/* <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost">Secondary Action</Button>
          </ModalFooter> */}
        </ModalContent>
      </Modal>
    </>
  );
};

export default CreateNewPostModal;
