
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Global/Footer/Footer';
import Header from './components/Global/Header/Header';
import Home from './components/Pages/Home/Home';
import Login from './components/Pages/Auth/Login'
import Notfound from './components/Pages/NotFound/Notfound';
import Dashboard from './components/Pages/Dashboard/Dashboard';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        {/* Public Routes  */}
        <Route path='*' element={<Notfound></Notfound>} />
        <Route path='/' element={<Home></Home>} />
        <Route path='/home' element={<Home></Home>} />
        <Route path='/blogs' element={<Home></Home>} />
        <Route path='/portfolio' element={<Home></Home>} />
        <Route path='/all-products' element={<Home></Home>} />
        <Route path='/login' element={<Login></Login>} />
        <Route path='/register' element={<Home></Home>} />

        {/* Private Routes  */}

        <Route path='/Dashboard' element={<Dashboard></Dashboard> } />


        
      </Routes>

      <Footer></Footer>
    </div>
  );
}

export default App;
