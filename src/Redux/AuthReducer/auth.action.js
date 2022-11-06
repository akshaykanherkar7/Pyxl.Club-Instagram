import axios from "axios";
import * as types from "./auth.actionTypes";

export const registerSignUpAPI = (user) => (dispatch) => {
  dispatch({ type: types.REGISTER_REQ });
  return axios
    .post("https://instapyxlclubserver.herokuapp.com/api/UserData", user)
    .then((res) => {
      dispatch({ type: types.REGISTER_SUCCESS, payload: res.data });
      return types.REGISTER_SUCCESS;
    })
    .catch((e) => {
      dispatch({ type: types.REGISTER_FAILED, payload: e });
      return types.REGISTER_FAILED;
    });
};

export const getLoginDataAPI = () => (dispatch) => {
  dispatch({ type: types.GET_LOGINDATA_REQ });
  return axios
    .get("https://instapyxlclubserver.herokuapp.com/api/UserData")
    .then((res) => {
      console.log("res:", res);
      dispatch({ type: types.GET_LOGINDATA_SUCCESS, payload: res.data });
    })
    .catch((e) => {
      dispatch({ type: types.GET_LOGINDATA_FAILED });
    });
};

export const checkLoginorNotAPI = (creds) => (dispatch) => {
  dispatch({ type: types.CHECK_LOGIN_REQ });
  return axios
    .get("https://instapyxlclubserver.herokuapp.com/api/UserData")
    .then((res) => {
      dispatch({ type: types.CHECK_LOGIN_SUCCESS, payload: creds });
    })
    .catch((e) => {
      dispatch({ type: types.CHECK_LOGIN_FAILED });
    });
};

export const updateUserData = (id, data) => (dispatch) => {
  dispatch({ type: types.UPDATE_USERDATA_REQ });
  return axios
    .put(`https://instapyxlclubserver.herokuapp.com/api/UserData/${id}`, data)
    .then((res) => {
      return types.UPDATE_USERDATA_SUCC;
    })
    .catch((err) => {
      return types.UPDATE_USERDATA_FAI;
    });
};

export const logOutAPI = () => (dispatch) => {
  dispatch({ type: types.LOGOUT });
};
