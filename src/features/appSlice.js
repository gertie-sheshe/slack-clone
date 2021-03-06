import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  roomId: 0,
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    enterRoom: (state, action) => {
      state.roomId = action.payload.roomId;
      // state = { ...state, roomId: action.payload.roomId };
    },
  },
});

export const { enterRoom } = appSlice.actions;

export const selectRoomId = (state) => {
  return state.app.roomId;
};

export default appSlice.reducer;
