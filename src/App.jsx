
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/navbar/navbar';
import Content from './components/navbar/content';
import Login from "./components/Login/login";
import Footer from './components/Footer/footer';
import Contact from './components/ContactUs/Contact'
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();
AOS.refresh();
AOS.refreshHard();




function App() {
  return (
   <div>
    {/* <Navbar/>
    
    <Login/> */}

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
