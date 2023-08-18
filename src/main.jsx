import React from "react";
import ReactDOM from "react-dom/client";
import "./style/index.css";
import Footer from "./components/Footer.jsx";
import Content from "./components/Content.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <h1 className="title-page">Checkot</h1>

    <Content />
    <div className="footer">
      <Footer />
    </div>
  </React.StrictMode>
);
