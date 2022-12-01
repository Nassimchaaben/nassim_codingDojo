import './App.css';
import {
  Routes,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home';
import Number from './components/Number';
import Color from './components/Color';

function App() {
  return (
    <div className="App">
      <Link to="/"></Link>
         <Routes>
          <Route path='/home' element={<Home />} />
          <Route path='/:number' element={<Number/>} />
          <Route path='/:number/:color/:background' element={<Color/>} />
         </Routes>
    </div>
  );
}

export default App;
