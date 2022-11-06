import {
  Box,
  Button,
  Flex,
  Grid,
  Image,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getLoginDataAPI } from "../../Redux/AuthReducer/auth.action";
import "../Posts/Posts.css";

const SharePost = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const dispatch = useDispatch();

  const { loginData } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getLoginDataAPI());
  }, []);
  return (
    <>
      <i
        onClick={onOpen}
        id="likesharecommentbtn"
        class="fa-solid fa-up-right-from-square"
      ></i>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader textAlign={"center"}>Share</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <hr />
            <Box h="auto">
              <Box>
                <Flex h="100%" alignItems={"center"}>
                  <Text fontWeight={"bold"} mb="8px" mt="8px" p="3px">
                    To:
                  </Text>
                  <Input
                    h="35px"
                    placeholder="Search..."
                    border={"none"}
                  ></Input>
                </Flex>
              </Box>
              <hr />
              <Text fontSize={"14px"} p="5px" color={"black"} fontWeight="bold">
                Suggested
              </Text>
              <Box
                //    border="1px solid red"
                mt="5px"
                h="auto"
              >
                <Grid gap="8px">
                  {loginData.length > 0 &&
                    loginData.map((el) => (
                      <Box
                        //   border="1px solid lightgray"
                        borderRadius="5px"
                        h="50px"
                        paddingLeft={"3px"}
                      >
                        <Flex h="100%" gap="8px">
                          <Box
                            //   border="1px solid red"
                            w="15%"
                            borderRadius={"32px"}
                          >
                            <Image
                              src={
                                el.user_img
                                  ? el.user_img
                                  : "https://cdn-icons-png.flaticon.com/512/149/149071.png"
                              }
                              borderRadius={"32px"}
                              //   border="1px solid green"
                              w="100%"
                              h="100%"
                            ></Image>
                          </Box>
                          <Box
                            //   border="1px solid red"
                            w="60%"
                          >
                            <Text fontWeight={500} fontFamily={"body"}>
                              {el.username}
                            </Text>
                            <Box
                              //    border="1px solid black"
                              h="50%"
                              mt="-5px"
                            >
                              <Flex justifyContent={"start"}>
                                <Text
                                  color={"gray"}
                                >{`${el.fname} ${el.lname}`}</Text>
                              </Flex>
                            </Box>
                          </Box>
                          <Box
                            //   border="1px solid red"
                            w="20%"
                          >
                            <Box
                              //   border="1px solid yellow"
                              mt="2"
                              ml="6"
                              h="60%"
                              w="40%"
                            >
                              <input
                                type="checkbox"
                                style={{
                                  height: "100%",
                                  width: "100%",
                                  borderRadius: "50px",
                                }}
                              />
                            </Box>
                          </Box>
                        </Flex>
                      </Box>
                    ))}
                </Grid>
              </Box>
            </Box>
          </ModalBody>
          <ModalFooter>
            <Button
              w="100%"
              colorScheme="blue"
              display={"block"}
              mr={3}
              onClick={onClose}
            >
              Send
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default SharePost;
