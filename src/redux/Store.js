import {configureStore} from "@reduxjs/toolkit";
import CartSlices from "./slices/CartSlices";
import CategorySlices from "./slices/CategorySlices";
import SearchSlices from "./slices/SearchSlices";


const Store = configureStore({
  reducer:{
    cart:CartSlices,
    category: CategorySlices,
    search : SearchSlices,
  }
});
export default Store