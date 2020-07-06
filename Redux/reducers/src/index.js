import React from "react";
import ReactDOM from "react-dom";
import { createStore, combineReducers } from "redux";

//const variable to hold action type
const ADD_ITEM = "ADD_ITEM";

//action
var action = {
  type: ADD_ITEM,
  item: "apple"
};

//action creator
const addItem = item => {
  return {
    type: ADD_ITEM,
    item: item
  };
};

//reducer
const reducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_ITEM":
      return; //new state with added item
    case "DELETE_ITEM":
      return; //new state with deleted item
    default:
      return state;
  }
};

//dispatching actions
//store.dispatch(addItem('apple'))

function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
