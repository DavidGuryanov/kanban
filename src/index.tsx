import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import {RecoilRoot} from "recoil";

ReactDOM.render(
    <React.StrictMode>
        <RecoilRoot>
            <h1>Test</h1>
        </RecoilRoot>
    </React.StrictMode>,
    document.getElementById("root")
);
