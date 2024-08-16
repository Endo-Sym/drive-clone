import './App.css';
import Home from './page/Home';
import Mydrive from './page/Mydrive';
import Computers from './page/Computers';
import Share from './page/Share';
import {  BrowserRouter,Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/mydrive" element={<Mydrive/>}/>
      <Route path="/computer" element={<Computers/>}/>
      <Route path="/share" element={<Share/>}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
