import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Service from "./Pages/Service";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import Navbar from "./componets/Navbar";

import './index.css'
import Footer from "./componets/Footer";
import Error404 from "./Pages/Error404";
import Logout from "./Pages/Logout";

function App() {
  

  return (
    <>
    <div style={{ "backgroundColor": "#dbd8e3" }}>
      <BrowserRouter>
      <Navbar/>
       <Routes>
        <Route path="/" element = {<Home />}/>
        <Route path="/about" element = {<About />}/>
        <Route path="/contact" element = {<Contact />}/>
        <Route path="/service" element = {<Service />}/>
        <Route path="/register" element = {<Register/>}/>
        <Route path="/login" element = {<Login />}/>
        <Route path="/logout" element = {<Logout />}/>
        <Route path="*" element = {<Error404 />}/>
       </Routes>
       <Footer/>
      </BrowserRouter>
      </div>
    </>
  )
}

export default App
