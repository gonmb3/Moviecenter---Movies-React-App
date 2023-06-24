import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

//swiper
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
//aos animation
import "aos";
import "aos/dist/aos.css";
//react router dom
import { BrowserRouter } from "react-router-dom";



ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/*react route dom*/}
    <BrowserRouter>
          <App />
    </BrowserRouter>     
  </React.StrictMode>
);
