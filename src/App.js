import React from "react";
import RegisterPage from "./pages/Register";
import "./style.scss"
import LoginPage from "./pages/Login";
import Homepage from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Homepage />
      <RegisterPage />
      <LoginPage />
    </div>
  );
}

export default App;
