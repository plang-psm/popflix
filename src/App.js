import Home from "./client/pages/Home";
import About from "./client/pages/About";
import Movies from "./client/pages/Movies";
import TvShows from "./client/pages/TvShows";
import SignUp from "./client/pages/SignUp";
import LogIn from "./client/pages/LogIn";
import Navbar from './client/components/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/tv-shows' element={<TvShows />} />
          <Route path='/movies' element={<Movies />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/login' element={<LogIn />} />
        </Routes>
      </Router>
      {/* <h1 className="text-5xl font-bold underline">Hello</h1> */}
      {/* <Navbar />
      <Home /> */}
    </div>
  );
}

export default App;
