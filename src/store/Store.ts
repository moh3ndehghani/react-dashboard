import { configureStore } from "@reduxjs/toolkit";
import SidebarStore from "store/SidebarStore";

const store = configureStore({
  reducer: {
    SidebarStore
  },
});

export default store;
