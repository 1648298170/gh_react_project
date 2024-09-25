import { combineReducers } from "@reduxjs/toolkit";
import todo from "./todo";
import visibilityFilter from "./visibilityFilter";


export default combineReducers({todo,visibilityFilter});