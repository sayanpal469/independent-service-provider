import { Route, Routes } from 'react-router-dom';
import Navbar from './components/SharedPages/Navbar/Navbar';
import Home from './components/HomeSection/Home/Home';
import Services from './components/HomeSection/Service/Services';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
          <Route path='/' element={ <Home/> }></Route>
          <Route path='/services' element={ <Services/> }></Route>
      </Routes>
    </div>
  );
}

export default App;
