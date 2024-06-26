import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Details from "./Components/Details.jsx";
import store from "./Redux/store.js";
import { Provider } from "react-redux";
import PrivateRoute from "./Components/PrivateRoute.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="" element={<PrivateRoute />}>
          <Route path="/details/:id" element={<Details />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </Provider>
);
