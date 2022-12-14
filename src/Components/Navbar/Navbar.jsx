import React from "react";
import styles from "./Navbar.module.css";
import { useDispatch, useSelector } from "react-redux";

import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Flex,
  Box,
  useDisclosure,
  Heading,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import SignIn from "../../Pages/SignIn";
import { logOutAPI } from "../../Redux/AuthReducer/auth.action";
import { getSavedPostsAPI } from "../../Redux/SavePosts/save.action";
import Profile from "../Profile/Profile";

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("LoginData"));
  const { isAuth } = useSelector((state) => state.auth);

  const handleNavigate = () => {
    isAuth ? navigate("/homepage") : navigate("/");
  };

  const handleMyPosts = () => {
    navigate("/myposts");
  };

  const handleSavedPost = () => {
    dispatch(getSavedPostsAPI());
    navigate("/savedposts");
  };

  const handleLogout = () => {
    dispatch(logOutAPI());
    navigate("/");
  };

  return (
    <Box w={["100%", "100%", "100%"]}>
      <div className={styles.mainDiv}>
        <div className={styles.imgDiv}>
          <img
            onClick={handleNavigate}
            src="https://180dc.org/wp-content/uploads/2018/12/Insta-Logo.png"
            alt="insta_logo"
          />
        </div>
        <div className={styles.text}>
          <Heading
            fontSize={[9, 12, 28, 32]}
            color={"brown"}
            display={["none", "none", "contents"]}
          >
            Welcome to Instagram
          </Heading>
        </div>
        {isAuth ? (
          <Box className={styles.innerDiv3}>
            <Menu>
              <Flex
                marginLeft="-50px"
                display="flex"
                gap="10px"
                alignItems="center"
              >
                <Box>
                  <i class="fa-solid fa-user"></i>
                </Box>
                <MenuButton>
                  {user.fname} <i class="fa-solid fa-angle-down"></i>
                </MenuButton>
              </Flex>
              <MenuList>
                <MenuItem minH="48px" gap="30px">
                  <i class="fa-solid fa-user"></i>
                  {/* <span>My Profile</span> */}
                  <Profile></Profile>
                </MenuItem>
                <MenuItem minH="40px" gap="30px" onClick={handleMyPosts}>
                  <i class="fa-solid fa-image"></i>
                  <span>My Posts</span>
                </MenuItem>
                <MenuItem minH="40px" gap="30px" onClick={handleSavedPost}>
                  <i class="fa-regular fa-images"></i>
                  <span>Saved Posts</span>
                </MenuItem>
                <MenuItem minH="40px" gap="30px" onClick={handleLogout}>
                  <i class="fa-solid fa-arrow-right-from-bracket"></i>
                  <span>Logout</span>
                </MenuItem>
              </MenuList>
            </Menu>
          </Box>
        ) : (
          <Box className={styles.innerDiv3}>
            <span class="material-symbols-outlined">login</span>
            <div style={{ marginLeft: "10px", marginTop: "-17px" }}>
              <SignIn
                isOpen={isOpen}
                onOpen={onOpen}
                onClose={onClose}
              ></SignIn>
            </div>
          </Box>
        )}
      </div>
    </Box>
  );
};

export default Navbar;
