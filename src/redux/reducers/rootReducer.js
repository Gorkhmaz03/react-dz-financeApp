import { combineReducers } from "@reduxjs/toolkit";
import transactionReducer from "./transactionReducer";

const rootReducer = combineReducers({
  transactions: transactionReducer,
});

export default rootReducer;
