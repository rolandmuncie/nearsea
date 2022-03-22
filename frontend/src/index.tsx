import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import App from "./App";
import { getNearInfo } from "./near";

getNearInfo().then(({ contract, currentUser, nearConfig, wallet }) => {
  ReactDOM.render(
     <BrowserRouter>
      <App
        contract={contract}
        currentUser={currentUser}
        nearConfig={nearConfig}
        wallet={wallet}
      />
    </BrowserRouter>,
    document.getElementById("root")
  );
});
