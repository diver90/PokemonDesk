    import React from "react";
import ReactDOM from "react-dom";

import { Provider } from 'react-redux';

import App from "./App";
import configStore from './configStore';

import "./index.css";

const store = configStore({});

ReactDOM.render((
    <Provider store={store}>
        <App />
    </Provider>
), document.getElementById('root'));