import { createSlice } from "@reduxjs/toolkit";

const chatSlice = createSlice({
  name: "Chat",
  initialState: {
    liveChat: [],
  },
  reducers: {
    addChat: (state, action) => {
      state.liveChat.splice(50, 35);
      state.liveChat.push(action.payload);
    },
  },
});
export const { addChat } = chatSlice.actions;
export default chatSlice.reducer;
