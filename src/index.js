// // 入口文件
import React from "react";
import App from './App.jsx'
import './assets/reset.css'
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import store from './store';
//
// const container = document.getElementById('root');
// const root = createRoot(container);
//
// root.render(
//     <Provider store={store}>
//         <App/>
//     </Provider>
// )

ReactDOM.render(
    <Provider store={store}>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </Provider>,
    document.getElementById('root')
);
