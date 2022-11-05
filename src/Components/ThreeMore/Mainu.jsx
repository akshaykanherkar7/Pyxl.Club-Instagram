import {
  Box,
  Button,
  Flex,
  Grid,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";

const Mainu = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
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
          {/* <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton /> */}
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
                <Text mb="2" mt="2" textAlign={"center"} cursor="pointer">
                  Add to Favourites
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
                <Text mb="2" mt="2" textAlign={"center"} cursor="pointer" onClick={onClose}>
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
