import React from "react";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Text,
  useColorModeValue,
  useDisclosure,
  Center,
} from "@chakra-ui/react";

import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useToast,
} from "@chakra-ui/react";
import { useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  getLoginDataAPI,
  registerSignUpAPI,
} from "../Redux/AuthReducer/auth.action";
import { REGISTER_SUCCESS } from "../Redux/AuthReducer/auth.actionTypes";

const SignUp = () => {
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const finalRef = React.useRef(null);

  // SignUp
  const [showPassword, setShowPassword] = useState(false);
  const [data, setData] = useState({});
  // const [state, setter] = useReducer(reducer, initialState);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const HandleOnChangeData = (e) => {
    let { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const signupHandler = (e) => {
    e.preventDefault();
    console.log(data);
    dispatch(registerSignUpAPI(data))
      .then((res) => {
        dispatch(getLoginDataAPI());
      })
      .then((res) => {
        if (res === REGISTER_SUCCESS) {
          navigate("/");
        }
      });
    toast({
      title: "Account Created",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
    onClose();
  };

  const handleNavigate = () => {
    onClose();
  };
  return (
    <div>
      <Text cursor={"pointer"} color="blue" onClick={onOpen}>
        SignUp
      </Text>

      {/* SignUp */}
      <Modal
        height="100%"
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent w={[300, 300, 400]}>
          <ModalHeader>
            <Center>SIGN UP</Center>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody h="sm">
            <Flex
              align={"center"}
              justify={"center"}
              bg={useColorModeValue("gray.50", "gray.800")}
            >
              <Stack spacing={1} mx={"auto"} maxW={"lg"} py={2} px={1}>
                <Center p={2}>
                  <Stack spacing={2} align={"center"} maxW={"md"} w={"full"}>
                    {/* Google */}
                    <Button
                      w={"full"}
                      variant={"outline"}
                      leftIcon={<FcGoogle />}
                    >
                      <Center>
                        <Text>Sign in with Google</Text>
                      </Center>
                    </Button>
                    {/* Facebook */}
                    <Button
                      w={"full"}
                      colorScheme={"facebook"}
                      leftIcon={<FaFacebook />}
                    >
                      <Center>
                        <Text>Continue with Facebook</Text>
                      </Center>
                    </Button>
                  </Stack>
                </Center>
                <Box
                  rounded={"lg"}
                  bg={useColorModeValue("white", "gray.700")}
                  p={2}
                >
                  <Stack spacing={4}>
                    <form onSubmit={signupHandler}>
                      <HStack>
                        <Box>
                          <FormControl id="firstName" isRequired>
                            <FormLabel>First Name</FormLabel>
                            <Input
                              required
                              type="text"
                              name="fname"
                              value={data.fname}
                              onChange={HandleOnChangeData}
                            />
                          </FormControl>
                        </Box>
                        <Box>
                          <FormControl id="lastName">
                            <FormLabel>Last Name</FormLabel>
                            <Input
                              type="text"
                              name="lname"
                              value={data.lname}
                              onChange={HandleOnChangeData}
                            />
                          </FormControl>
                        </Box>
                      </HStack>
                      <FormControl id="email" isRequired>
                        <FormLabel>Email address</FormLabel>
                        <Input
                          type="email"
                          name="email"
                          value={data.email}
                          onChange={HandleOnChangeData}
                        />
                      </FormControl>
                      <FormControl id="username" isRequired>
                        <FormLabel>Username</FormLabel>
                        <Input
                          type="string"
                          name="username"
                          value={data.username}
                          onChange={HandleOnChangeData}
                        />
                      </FormControl>
                      <Box>
                        <FormControl id="mobile" isRequired>
                          <FormLabel>Mobile</FormLabel>
                          <Input
                            type="number"
                            name="number"
                            value={data.number}
                            onChange={HandleOnChangeData}
                          />
                        </FormControl>
                      </Box>
                      <FormControl id="password" isRequired>
                        <FormLabel>Password</FormLabel>
                        <InputGroup>
                          <Input
                            type={showPassword ? "text" : "password"}
                            name="password"
                            value={data.password}
                            onChange={HandleOnChangeData}
                          />
                          <InputRightElement h={"full"}>
                            <Button
                              variant={"ghost"}
                              onClick={() =>
                                setShowPassword((showPassword) => !showPassword)
                              }
                            >
                              {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                            </Button>
                          </InputRightElement>
                        </InputGroup>
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
                          type="submit"
                        >
                          Sign up
                        </Button>
                      </Stack>
                    </form>
                    <Stack pt={6}>
                      <Text align={"center"} onClick={handleNavigate}>
                        Already a user?{" "}
                        <label style={{ color: "blue", cursor: "pointer" }}>
                          Login
                        </label>
                      </Text>
                    </Stack>
                  </Stack>
                </Box>
              </Stack>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default SignUp;
