
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/navbar/navbar';
import Content from './components/navbar/content';
import Login from "./components/Login/login";
import Contact from './components/ContactUs/Contact'





function App() {
  return (
   <div>


<Router>

        <Navbar />
        <Routes>
          <Route path="*" element={<Content />} />
          <Route path="/test" element={<Login />} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
      </Router>
     
   </div>
  );
}

export default App;
