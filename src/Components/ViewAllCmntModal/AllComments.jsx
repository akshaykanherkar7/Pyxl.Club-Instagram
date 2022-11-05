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

const AllComments = ({ Item }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const hours = (data) => {
    let { time } = data;
    let arr = time.toString().split(" ");
    console.log("arr:", arr);
    let ctime = arr[4];
    return ctime;
  };
  const Day = (data) => {
    let { time } = data;
    let arr = time.toString().split(" ");
    console.log("arr:", arr);
    let day = arr[0];
    return day;
  };
  const getAADate = (data) => {
    let { time } = data;
    let arr = time.toString().split(" ");
    console.log("arr:", arr);
    let date = arr[2];
    return date;
  };
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
        {Item.Comments.length === 0
          ? "No Comments"
          : `View all ${Item.Comments.length} comments`}
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
                    <Box mt="5px">
                      <Flex gap="3px" h="100%" alignItems={"center"}>
                        <Box w="10%">
                          <Image
                            w="100%"
                            src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
                          ></Image>
                        </Box>
                        <Box mt="5px">
                          <Text mt="15px"
                            //   border="1px solid black"
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
                          <Box w="100%" ml="10px">
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
