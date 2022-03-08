import "./assets/style.css";

import { Provider, useDispatch } from "react-redux";
import React, { useEffect } from "react";
import store, { subscribers } from "./redux/store";

import Box from "./components/Box/Box";
import Pages from "./pages";
import ReactDOM from "react-dom";

const Main = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    subscribers(dispatch);
  }, []);
  return <Pages />;
};

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Main />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
