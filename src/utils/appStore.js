import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import searchSlice from "./searchSlice";
import chatSlice from "./chatSlice";

const appStore = configureStore({
  reducer: {
    app: appSlice,
    caching: searchSlice,
    Chat:chatSlice
  },
});
export default appStore;
