import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {
    id: "",
    nick_name: "",
    isLoading: false,
    isLogin: false,
  },
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginUser: (state, action) => {
      state.id = action.payload.id;
      state.isLogin = true;
      return state;
    },
    logoutUser: (state, action) => {
      state.id = "";
      state.isLogin = false;
      return state;
    },
  },
});

export const { loginUser, logoutUser } = userSlice.actions;

export default userSlice.reducer;
