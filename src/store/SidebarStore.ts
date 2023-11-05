import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface InitialState {
  open: boolean;
}

const initialState: InitialState = {
  open: false,
};

const sidebarSlice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    setOpen: (state, action: PayloadAction<boolean>) => {
      state.open = action.payload;
    },
  },
});

export const { setOpen } = sidebarSlice.actions;

export default sidebarSlice.reducer;
