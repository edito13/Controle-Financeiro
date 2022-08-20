import React from "react";
import ReactDOM from "react-dom";
import './estilo.css'
import App from "./App.jsx";
import { Provider } from "react-redux";
import store from './store/store'

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
,document.getElementById("root"))
