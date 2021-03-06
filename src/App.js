import { Route, Routes } from 'react-router-dom';
import Navbar from './components/SharedPages/Navbar/Navbar';
import Home from './components/HomeSection/Home/Home';
import Services from './components/HomeSection/Service/Services';
import Register from './components/LoginSection/Register/Register';
import Login from './components/LoginSection/Login/Login';

import NotFound from './components/SharedPages/NotFound/NotFound';
import RequireAuth from './components/LoginSection/PrivateAuth/RequireAuth';
import CheckOut from './components/CheakOut/CheckOut/CheckOut';
import About from './components/SharedPages/About/About';
import Gallery from './components/HomeSection/Gallery/Gallery';
import Blogs from './components/SharedPages/Blogs/Blogs';
import Footer from './components/SharedPages/Footer/Footer';

function App() {
  return (
    <div className="App">

      <Navbar/>

      <Routes>
          <Route path='/' element={ <Home/> }></Route>
          <Route path='/home' element={ <Home/> }></Route>
          <Route path='/services' element={ <Services/> }></Route>
          <Route path='/gallery' element={ <Gallery/> }></Route>
          <Route path='/login' element={ <Login/> }></Route>
          <Route path='/register' element={ <Register/> }></Route>
          <Route path='/checkOut' element={
            <RequireAuth>
              <CheckOut/>
            </RequireAuth>
          }></Route>
          <Route path='/blogs' element={ <Blogs/> }></Route>
          <Route path='/about' element={ <About/> }></Route>
          <Route path='*' element={ <NotFound/> }></Route>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
