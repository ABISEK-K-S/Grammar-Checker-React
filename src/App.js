import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./../src/styles.css";
import RouteComponent from "./../src/helper/routes";

function App() {
  return (
    <BrowserRouter>
      <RouteComponent />
    </BrowserRouter>
  );
}

export default App;
