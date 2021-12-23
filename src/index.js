import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import myApp from './reducers'
import reportWebVitals from './reportWebVitals';
import TableExampleSortable from './TableExampleSortable';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import ErrorBoundary from './ErrorBoundary'
import thunkMiddleware from 'redux-thunk'

let middleware = [thunkMiddleware]; // lets us dispatch() functions

//filter redux form log to clean up log
//filter periodic request to clean up log
const filterList= ['REQUEST_VALIDATE', 'RECEIVE_VALIDATE', /*'@@redux-form',*/ 'BACKEND_SYSTEM_STATUS', 'START_VALIDATE'];


let logger = require('redux-logger').createLogger({
  predicate: (getState, action) => {

      return !filterList.some(f =>
          action.type.includes(f)
      )

  }
}); // neat middleware that logs actions
middleware = [...middleware, logger];

let store = createStore(
  myApp,
  applyMiddleware(...middleware)
);

let rootElement = document.getElementById('root');
if (rootElement) {
  ReactDOM.render(
    <ErrorBoundary>
    <Provider store={store}>
      <TableExampleSortable />
    </Provider>
    </ErrorBoundary>,
    rootElement
  );
}


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
