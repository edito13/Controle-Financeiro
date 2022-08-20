import { createStore, combineReducers } from "redux";
import calculoReducer from "./Calculo/calculo.reducer";

const rootReducer = combineReducers({
    calculo: calculoReducer
})

const store = createStore(rootReducer)

export default store