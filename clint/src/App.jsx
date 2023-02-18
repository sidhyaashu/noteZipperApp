import React from "react"
import Footer from "./component/footer/Footer"
import Header from "./component/header/Header"
import LandingPage from "./screens/landingPage/LandingPage"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MyNotes from "./screens/myNotes/MyNotes";
import LoginScreen from "./screens/loginscreen/LoginScreen";
import RegesterScreen from "./screens/registerscreen/RegesterScreen";

const App=()=>{
  return(
    <Router>
      <Header/>
        <main style={{minHeight:"93vh"}}>
          <Routes>
            <Route path="/" element={<LandingPage/>} exact />
            <Route path="/mynotes" element={<MyNotes/>}  />
            <Route path="/login" element={<LoginScreen/>}  />
            <Route path="/register" element={<RegesterScreen/>}  />
          </Routes>
        </main>
      <Footer/>
    </Router>
  )
}

export default App