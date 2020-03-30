import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import rootReducer from './modules';

const store = createStore(rootReducer, composeWithDevTools());
console.log("2.크리에이트 스토어")
ReactDOM.render(
    //Provider를 사용해서 store의 상태가 변경될 때 마다 렌더링을 할 수 있도록 알려줌
    <Provider store={store}>
        {console.log("3.ReactDom.render")}
        <App />
    </Provider>,
    document.getElementById('root')
);

serviceWorker.unregister();
