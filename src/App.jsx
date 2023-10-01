import "./App.css";
// import '@coreui/coreui/dist/css/coreui.min.css'
// import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/navbar";
import Content from "./components/navbar/content";
import Login from "./components/Login/login";
import Contact from "./components/ContactUs/Contact";
import Gallery from "./components/Destinations/gallery";
import Book from "./components/DreamDestination/book";
import Trip from "./components/DreamDestination/trip";


function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="*" element={<Content />} />
          <Route path="/test" element={<Login />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/dest/:id" element={<Gallery />} />
          <Route path="/book" element={<Book />} />
          <Route path="/trip" element={<Trip/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
