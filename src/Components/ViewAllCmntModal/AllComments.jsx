import {
  Box,
  Button,
  Flex,
  Image,
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

const AllComments = ({ Item }) => {
  // console.log("Item:", Item);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const dispatch = useDispatch();
  const { loginData } = useSelector((state) => state.auth);

  const hours = (data) => {
    let { time } = data;
    let arr = time.toString().split(" ");
    // console.log("arr:", arr);
    let ctime = arr[4];
    return ctime;
  };
  const Day = (data) => {
    let { time } = data;
    let arr = time.toString().split(" ");
    // console.log("arr:", arr);
    let day = arr[0];
    return day;
  };
  const getAADate = (data) => {
    let { time } = data;
    let arr = time.toString().split(" ");
    // console.log("arr:", arr);
    let date = arr[2];
    return date;
  };

  function checkuserIMG(cmnt) {
    let imgUrl = "";
    for (let i = 0; i < loginData.length; i++) {
      if (loginData[i].id === cmnt.user_id) {
        if (loginData[i].user_img) {
          imgUrl = loginData[i].user_img;
          break;
        }
      }
    }
    if (imgUrl !== "") {
      return imgUrl;
    }

    return "https://cdn-icons-png.flaticon.com/512/149/149071.png";
  }

  useEffect(() => {
    dispatch(getLoginDataAPI);
  }, []);

  return (
    <>
      <Text
        //  border={"1px solid red"}
        color="gray"
        paddingLeft="20px"
        cursor="pointer"
        onClick={onOpen}
      >
        {/* View all {Item.Comments.length} comments */}

        {`View all ${Item.Comments.length} comments`}
      </Text>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>All Comments</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Box
              // border="1px solid red"
              h="auto"
            >
              <Box>
                {Item.Comments.length > 0 &&
                  Item.Comments.map((el) => (
                    <Box
                      mt="5px"
                      border="1px solid lightgray"
                      p="8px"
                      borderRadius={"6px"}
                    >
                      <Flex
                        gap="3px"
                        h="auto"
                        alignItems={"center"}
                        // border="1px solid red"
                      >
                        <Box
                          w="15%"
                          // border="1px solid yellow"
                          borderRadius={"30px"}
                          h="50px"
                        >
                          <Image
                            w="100%"
                            borderRadius={"30px"}
                            src={checkuserIMG(el)}
                            // border="1px solid red"
                            h="100%"
                          ></Image>
                        </Box>
                        <Box
                          mt="5px"
                          // border="1px solid pink"
                          w="100%"
                        >
                          <Text
                            mt="15px"
                            // border="1px solid black"
                            ml="-5px"
                            key={el.id}
                            paddingLeft="15px"
                          >
                            <span
                              style={{
                                fontWeight: "bold",
                                cursor: "pointer",
                                color: "#484848",
                              }}
                            >
                              {el.username}{" "}
                            </span>
                            {el.comment}
                          </Text>
                          <Box
                            w="100%"
                            ml="10px"
                            // border={"1px solid red"}
                          >
                            <Flex h="100%" justifyContent="space-evenly">
                              <Text color="gray">{getAADate(el)}</Text>
                              <Text color="gray">{Day(el)}</Text>
                              <Text color="gray">{hours(el)} hrs</Text>
                            </Flex>
                          </Box>
                        </Box>
                      </Flex>
                    </Box>
                  ))}
              </Box>
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

export default AllComments;
