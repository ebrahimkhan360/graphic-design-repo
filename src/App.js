
import './App.css';
import Header from './Pages/Shared/Header/Header';
import Banner from './Pages/Home/Banner/Banner';
import { Route, Routes } from 'react-router-dom';
import About from './Pages/About/About';
import Home from './Pages/Home/Home/Home';
import Footer from './Pages/Shared/Footer/Footer';
import ServiceDetail from './Pages/ServiceDetail/ServiceDetail';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Banner></Banner>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path='/service/:serviceId'element={<ServiceDetail></ServiceDetail>}></Route>
        <Route path="/about" element={<About></About>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
