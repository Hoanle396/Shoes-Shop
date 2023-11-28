import { configureStore } from "@reduxjs/toolkit";
import cartRaducer from "./Slice/Cart";
import productRaducer from "./Slice/Product";

const store = configureStore({
  reducer: {
    product: productRaducer,
    cart: cartRaducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
