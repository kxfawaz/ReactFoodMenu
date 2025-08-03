import React from "react";
// ✅ Use the new root API:
import { createRoot } from "react-dom/client";

import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
// If you still need the service worker, you can migrate to CRA's
// new serviceWorkerRegistration.js, otherwise remove these:
// import * as serviceWorker from "./serviceWorker";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
