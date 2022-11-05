import * as types from "./post.actionTypes";
import axios from "axios";

// GET POSTS
export const getPostsAPI = () => (dispatch) => {
  dispatch({ type: types.GET_POSTS_REQ });
  return axios
    .get("http://localhost:8080/Posts")
    .then((res) => {
      dispatch({ type: types.GET_POSTS_SUCC, payload: res.data });
    })
    .catch((err) => {
      console.log("err:", err);
      dispatch({ type: types.GET_POSTS_FAI });
    });
};

// CREATE POST
export const createPostAPI = (post) => (dispatch) => {
  dispatch({ type: types.CREATE_POST_REQ });
  return axios
    .post("http://localhost:8080/Posts", post)
    .then((res) => {
      console.log(res);
      return types.CREATE_POST_SUCC;
    })
    .catch((err) => {
      console.log("CREATE POST_err:", err);
      return types.CREATE_POST_FAI;
    });
};

// LIKES
export const likeAPI = (id, data) => (dispatch) => {
  return axios.patch(`http://localhost:8080/Posts/${id}`, data);
};

// COMMENTS
export const postCommentAPI = (id, newData) => (dispatch) => {
  return axios
    .put(`http://localhost:8080/Posts/${id}`, newData)
    .then((res) => {
      dispatch({ type: types.COMMENT_POST_HANDLE, payload: res.data });
    })
    .catch((err) => {
      console.log("err:", err);
    });
};

// DELTE POST
export const deletePostAPI = (id) => (dispatch) => {
  dispatch({ type: types.DELETE_POST_REQ });
  return axios
    .delete(`http://localhost:8080/Posts/${id}`)
    .then((res) => {
      return types.DELETE_POST_SUCC;
    })
    .catch((err) => {
      return types.DELETE_POST_FAI;
    });
};
