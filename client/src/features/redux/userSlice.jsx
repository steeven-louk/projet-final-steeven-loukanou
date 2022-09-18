import { createSlice } from "@reduxjs/toolkit";

// initialisation du state
const initialState = {
  userInfo: localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : [],
};

const userSlice = createSlice({
  name: "user",
  initialState,
});


export default userSlice.reducer;
