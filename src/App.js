import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Bollywood from './components/Bollywood';
import Technology from './components/Technology';
import Hollywood from './components/Hollywood';
import Fitness from './components/Fitness';
import Food from './components/Food';
import JasonData from './course.json';
import {useState} from 'react';


function App() {

  const [state, setstate] = useState(JasonData);

  return (
    <>
      <Router>

        <Routes>
          <Route path="/" element={<Home data={state}/>}></Route>
          <Route path="/bollywood" element={<Bollywood data={state}/>}></Route>
          <Route path="/technology" element={<Technology data={state}/>}></Route>
          <Route path="/hollywood" element={<Hollywood data={state}/>}></Route>
          <Route path="/fitness" element={<Fitness data={state}/>}></Route>
          <Route path="/food" element={<Food data={state}/>}></Route>

        </Routes>

      </Router>
    </>
  );
}

export default App;
