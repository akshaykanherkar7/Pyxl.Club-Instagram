import {
  Box,
  Button,
  Flex,
  Image,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  getLoginDataAPI,
  updateUserData,
} from "../../Redux/AuthReducer/auth.action";
import {
  UPDATE_USERDATA_FAI,
  UPDATE_USERDATA_SUCC,
} from "../../Redux/AuthReducer/auth.actionTypes";
import { getPostsAPI } from "../../Redux/Posts/post.action";

const Profile = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [profPic, setProfPic] = useState("");

  const dispatch = useDispatch();
  const toast = useToast();
  let userData = JSON.parse(localStorage.getItem("LoginData"));

  const handleUploadIMG = () => {
    let newUpdatedProfile = {
      username: userData.username,
      email: userData.email,
      password: userData.password,
      fname: userData.fname,
      lname: userData.lname,
      number: userData.number,
      id: userData.id,
      user_img: profPic,
    };
    dispatch(updateUserData(userData.id, newUpdatedProfile)).then((res) => {
      if (res === UPDATE_USERDATA_SUCC) {
        dispatch(getLoginDataAPI());
        dispatch(getPostsAPI());
        toast({
          title: "Profile Picure Successfully Saved",
          status: "success",
          duration: 2000,
          isClosable: true,
        });
      } else if (res === UPDATE_USERDATA_FAI) {
        toast({
          title: "Failed to Save Profile Picture",
          status: "error",
          duration: 2000,
          isClosable: true,
        });
      }
    });
  };

  return (
    <>
      {/* <Button onClick={onOpen}>Open Modal</Button> */}
      <span onClick={onOpen}>My Profile </span>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader textAlign={"center"}>My Profile</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Box
              // border="1px solid red"
              h="auto"
            >
              <Box
                //   border="1px solid black"
                mb="3px"
                h="70px"
              >
                <Box
                  //   border="1px solid yellow"
                  h="100%"
                  w="20%"
                  m="auto"
                  borderRadius={"45px"}
                >
                  <Image
                    w="100%"
                    h="100%"
                    // border={"1px solid red"}
                    borderRadius="35px"
                    src={
                      userData.user_img
                        ? userData.user_img
                        : "https://cdn-icons-png.flaticon.com/512/149/149071.png"
                    }
                    alt="user_image"
                  ></Image>
                </Box>
              </Box>
              <Box
                h="30px"
                // border="1px solid green"
              >
                <Flex h="100%" justifyContent={"space-evenly"}>
                  <Input
                    w="50%"
                    h="100%"
                    value={profPic}
                    onChange={(e) => setProfPic(e.target.value)}
                  ></Input>
                  <Button
                    colorScheme={"teal"}
                    h="100%"
                    onClick={handleUploadIMG}
                  >
                    {userData.user_img ? "Update Picture" : "Upload Picture"}
                  </Button>
                </Flex>
              </Box>
              <div
                style={{
                  border: "1px solid lightgray",
                  textAlign: "start",
                  width: "68%",
                  borderRadius: "9px",
                  margin: "auto",
                  marginTop: "4px",
                  padding: "6px",
                }}
              >
                <span style={{ fontWeight: "bold", color: "gray" }}>
                  FName:
                </span>{" "}
                {userData.fname}
              </div>
              <div
                style={{
                  border: "1px solid lightgray",
                  textAlign: "start",
                  width: "68%",
                  borderRadius: "9px",
                  margin: "auto",
                  marginTop: "4px",
                  padding: "6px",
                }}
              >
                <span style={{ fontWeight: "bold", color: "gray" }}>
                  LName:
                </span>{" "}
                {userData.lname}
              </div>
              <div
                style={{
                  border: "1px solid lightgray",
                  textAlign: "start",
                  width: "68%",
                  borderRadius: "9px",
                  margin: "auto",
                  marginTop: "4px",
                  padding: "6px",
                }}
              >
                <span style={{ fontWeight: "bold", color: "gray" }}>
                  UserName:
                </span>{" "}
                {userData.username}
              </div>
              <div
                style={{
                  border: "1px solid lightgray",
                  textAlign: "start",
                  width: "68%",
                  borderRadius: "9px",
                  margin: "auto",
                  marginTop: "4px",
                  padding: "6px",
                }}
              >
                <span style={{ fontWeight: "bold", color: "gray" }}>
                  Email:
                </span>{" "}
                {userData.email}
              </div>
              <div
                style={{
                  border: "1px solid lightgray",
                  textAlign: "start",
                  width: "68%",
                  borderRadius: "9px",
                  margin: "auto",
                  marginTop: "4px",
                  padding: "6px",
                }}
              >
                <span style={{ fontWeight: "bold", color: "gray" }}>
                  Mobile:
                </span>{" "}
                {userData.number}
              </div>
            </Box>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Profile;
