import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { authReducer } from "./AuthReducer/auth.reducer";
import { postReducer } from "./Posts/post.reducer";
import { saveReducer } from "./SavePosts/save.reducer";

const rootReducer = combineReducers({
  auth: authReducer,
  post: postReducer,
  save: saveReducer,
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
