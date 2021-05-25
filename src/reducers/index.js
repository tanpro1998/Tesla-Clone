import { combineReducers } from "redux";
import carReducer from '../features/carSlice'




export rootReducer = combineReducers({
    car: carReducer
})