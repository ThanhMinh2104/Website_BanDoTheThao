import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "~/App";
import reportWebVitals from "./reportWebVitals";
import GobalStyles from "~/components/GobalStyles";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <GobalStyles>
            <App />
        </GobalStyles>
    </React.StrictMode>,
);

reportWebVitals();
