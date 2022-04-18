
import './App.css';
import Header from './Pages/Shared/Header/Header';

import { Route, Routes } from 'react-router-dom';
import About from './Pages/About/About';
import Home from './Pages/Home/Home/Home';
import Footer from './Pages/Shared/Footer/Footer';
import ServiceDetail from './Pages/ServiceDetail/ServiceDetail';
import Blogs from './Pages/Home/Blogs/Blogs';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';


function App() {
  return (
    <div className="App">
      <Header></Header>
      
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path='/service/:serviceId'element={<ServiceDetail></ServiceDetail>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        
      </Routes>

      <Footer></Footer>
    </div>
  );
}

export default App;
