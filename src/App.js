import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Bollywood from './components/Bollywood';
import Technology from './components/Technology';
import Hollywood from './components/Hollywood';
import Fitness from './components/Fitness';
import Food from './components/Food';
import JasonData from './course.json';


function App() {


  return (
    <>
      <Router>

        <Routes>
          <Route path="/" element={<Home data={JasonData}/>}></Route>
          <Route path="/bollywood" element={<Bollywood data={JasonData}/>}></Route>
          <Route path="/technology" element={<Technology data={JasonData}/>}></Route>
          <Route path="/hollywood" element={<Hollywood data={JasonData}/>}></Route>
          <Route path="/fitness" element={<Fitness data={JasonData}/>}></Route>
          <Route path="/food" element={<Food data={JasonData}/>}></Route>

        </Routes>

      </Router>
    </>
  );
}

export default App;
