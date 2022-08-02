import { Routes, Route } from 'react-router-dom';
import './App.css';
import AboutUs from './components/AboutUs/AboutUs';
import FoodDetail from './components/FoodDetail/FoodDetail';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import NotFound from './components/NotFound/NotFound';
import SearchFood from './components/SearchFood/SearchFood';

function App() {
  return (
    <div className='bg-orange-300 text-center'>
      <h1 className='text-4xl font-bold font-mono mt-5 text-center'>Welcome To Foodies</h1>
      <div className='grid-cols-3'>
        <Header></Header>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/search" element={<SearchFood />}>
          <Route path=":foodId" element={<FoodDetail />}></Route>
        </Route>

        {/* <Route path="/search/:foodId" element={<FoodDetail />}></Route> */}

        <Route path="/login" element={<Login />} />

        <Route path="/about" element={<AboutUs />} />

        <Route path="*" element={<NotFound />} />

      </Routes>
    </div>
  );
}

export default App;
