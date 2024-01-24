import { createStore } from "redux";
import RootReducer from "./RootReducer";

const RStore = createStore(RootReducer);
export default RStore;
