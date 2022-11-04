import React from "react";
import { BrowserRouter } from "react-router-dom";
import * as ReactDOM from "react-dom/client";
import App from "./App";
import "bootstrap/dist/css/bootstrap.css";
import "./index.scss";

try {
  const rootElement: HTMLElement | null = document.getElementById("root");
  const root = rootElement && ReactDOM.createRoot(rootElement);

   root?.render(
     <React.StrictMode>
       <BrowserRouter>
         <App />
       </BrowserRouter>
     </React.StrictMode>
   );
} catch (error) {
  throw new Error("Html 'root' element not found.")
}
 

