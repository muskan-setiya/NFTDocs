// import * as React from 'react';
import {
  // BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Mediacard from '../components/card';

function Semester() {
  return (
      <div align = 'center'>
      <h3>Choose a Semester</h3>
     <Routes>
     <Route path="/" exact element = {<Mediacard text = 'Semester 1' link = '/sem1'/>}></Route>
     </Routes>
     <Routes>
     <Route path="/" exact element = {<Mediacard text = 'Semester 2 ' link = '/sem2'/>}></Route>
     </Routes>

    </div>
  );
}
export default Semester;