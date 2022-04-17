import { Route, Routes } from 'react-router-dom';
import Navbar from './components/SharedPages/Navbar/Navbar';
import Home from './components/HomeSection/Home/Home';
import Services from './components/HomeSection/Service/Services';
import Register from './components/LoginSection/Register/Register';
import Login from './components/LoginSection/Login/Login';
import RequireAuth from './components/LoginSection/PrivateAuth/RequireAuth';
import CheckOut from './components/HomeSection/CheckOut/CheckOut';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
          <Route path='/' element={ <Home/> }></Route>
          <Route path='/services' element={ <Services/> }></Route>
          <Route path='/checkOut' element={ 
            <RequireAuth>
              <CheckOut/>
            </RequireAuth>
           }></Route>
          <Route path='/login' element={ <Login/> }></Route>
          <Route path='/register' element={ <Register/> }></Route>
      </Routes>
    </div>
  );
}

export default App;
