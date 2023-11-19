import React from "react";
import RegisterPage from "./pages/Register";
import "./style.scss"
import LoginPage from "./pages/Login";
import Homepage from "./pages/Home";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";



function App() {
  return (
    // <div>
    //   <RegisterPage />
    //   <LoginPage />
    // </div>
    <Router>
        <Routes>
          <Route path='/'>
          <Route index element={<Homepage/>}/>
          <Route exact path='/' element={<Homepage/>}/>
          <Route exact path='/Login' element={<LoginPage/>}/>
          <Route exact path = '/Register' element ={<RegisterPage />} />
          </Route>
        </Routes>
    </Router>
  );
}

export default App;
