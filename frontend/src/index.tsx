import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { getNearInfo } from "./near";

getNearInfo().then(({ contract, currentUser, nearConfig, wallet }) => {
  ReactDOM.render(
    <React.StrictMode>
      <App
        contract={contract}
        currentUser={currentUser}
        nearConfig={nearConfig}
        wallet={wallet}
      />
    </React.StrictMode>,
    document.getElementById("root")
  );
});
