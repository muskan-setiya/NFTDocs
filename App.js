//import { Route, Routes } from 'react-router-dom';
//import AllMeetupsPage from './pages/AllMeetups';
// import NewMeetupPage from './pages/NewMeetup';
// import FavoritesPage from './pages/Favorites';

import {
  // BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Mediacard from './components/card';
import Semester from './pages/SemPage';

function App() {
  return (
    <div align = 'center'>
     <h2>Welcome to NFTDocs !</h2>
     <h3>Choose a Branch</h3>
    <Routes>
     <Route path="/" exact element = {<Mediacard text = 'Data Science' image = "https://s27389.pcdn.co/wp-content/uploads/2021/07/data-science-predictions-for-near-future-1024x440.jpeg.optimal.jpeg" link = '/ds'/>}></Route>
     <Route path="/ds" exact element = {<Semester/>}></Route>
    </Routes>
    <Routes>
     <Route path="/" exact element = {<Mediacard text = 'AIML' image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWizyJcBBx2jiz4yg0QoqxI_luHFVjW0NxMA&usqp=CAU" link = '/ai'/>}></Route>
    </Routes> 
    
    </div>
  );
}

export default App;

