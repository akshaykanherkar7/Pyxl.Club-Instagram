import * as types from "./post.actionTypes";

const initialState = {
  PostsData: [],
  isLoading: false,
  isError: false,
};

export const postReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.GET_POSTS_REQ: {
      return { ...state, isLoading: true, isError: false };
    }

    case types.GET_POSTS_SUCC: {
      return { ...state, isLoading: false, isError: false, PostsData: payload };
    }

    case types.GET_POSTS_FAI: {
      return { ...state, isLoading: false, isError: true };
    }

    case types.COMMENT_POST_HANDLE: {
      // let newData = state.PostsData.map((el) => {
      //   if (el.id === payload.id) {
      //     el = payload;
      //   }
      //   return el;
      // });
      // console.log("payload:", payload);
      return {
        ...state,
        PostsData: [...state.newData],
        isLoading: false,
        isError: false,
      };
    }

    default: {
      return state;
    }
  }
};
