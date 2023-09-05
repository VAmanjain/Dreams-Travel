import Home from './components/home/main'
import './App.css'
import Navbar from './components/navbar/navbar';
import About from './components/AboutUs/about';
import Destinations from './components/Destinations/destinations';
import Questions from './components/Questions/Questions';
import Footer from './components/Footer/footer';




function App() {
  return (
   <div>
    <Navbar/>
    <Home/>
    <Destinations/>
    <Questions/>
    <About/>
    <Footer/>
   </div>
  );
}

export default App;
