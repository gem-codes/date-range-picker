import React from "react";
import ReactDOM from "react-dom/client";
import { ToastContainer } from "react-toastify";

import reportWebVitals from "./reportWebVitals";
import DatePickerRange from "./components/DatePicker";

import "react-toastify/dist/ReactToastify.css";
import "react-datepicker/dist/react-datepicker.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <DatePickerRange />
    <ToastContainer />
  </React.StrictMode>
);

reportWebVitals();
