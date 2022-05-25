
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import Footer from './components/Global/Footer/Footer';
import Header from './components/Global/Header/Header';
import Home from './components/Pages/Home/Home';
import Login from './components/Pages/Auth/Login'
import Notfound from './components/Pages/NotFound/Notfound';
import Dashboard from './components/Pages/Dashboard/Dashboard';
import Register from './components/Pages/Auth/Register';
import RequireAuth from './authentication/RequireAuth';
import RequireAdmin from './authentication/RequireAdmin';
import MyProfile from './components/Pages/Dashboard/MyProfile';
import MyOrders from './components/Pages/Dashboard/MyOrders';
import MyReviews from './components/Pages/Dashboard/MyReviews';
import ManageOrders from './components/Pages/Dashboard/ManageOrders';
import ManageUsers from './components/Pages/Dashboard/ManageUsers';
import AddProduct from './components/Pages/Dashboard/AddProduct';
import ManageProducts from './components/Pages/Dashboard/ManageProducts';
import Blog from './components/Pages/Publicpages/Blog';
import Myportfolio from './components/Pages/Publicpages/Myportfolio';

import About from './components/Pages/Publicpages/About';
import Products from './components/Pages/Publicpages/Products';
import { ToastContainer } from 'react-toastify';
import Purchase from './components/Pages/Purchase/Purchase';
import Payment from './components/Pages/Dashboard/Payment';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        {/* Public Routes  */}
        <Route path='*' element={<Notfound></Notfound>} />
        <Route path='/' element={<Home></Home>} />
        <Route path='/home' element={<Home></Home>} />
        <Route path='/blog' element={<Blog></Blog>} />
        <Route path='/about' element={<About></About>} />
        <Route path='/portfolio' element={<Myportfolio></Myportfolio>} />
        <Route path='/products' element={<Products></Products>} />
        <Route path='/login' element={<Login></Login>} />
        <Route path='/register' element={<Register></Register>} />

        {/* Private Routes  */}
        <Route element={<RequireAuth />}>
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/purchase/:id' element={<Purchase />} />
          

          {/* nested routes */}
          <Route path='/dashboard' element={<Dashboard />}>
            <Route path='my-profile' element={<MyProfile />} />
            <Route path='my-orders' element={<MyOrders />} />
            <Route path='my-reviews' element={<MyReviews />} />
            <Route path='payment/:id' element={<Payment />} />

            <Route element={<RequireAdmin />}>
              <Route path='manage-orders' element={<ManageOrders />} />
              <Route path='manage-users' element={<ManageUsers />} />
              <Route path='add-product' element={<AddProduct />} />
              <Route path='manage-products' element={<ManageProducts />} />
            </Route>
          </Route>

        </Route>

        <Route path='/Dashboard' element={<Dashboard></Dashboard>} />



      </Routes>

      {/* Toast Container  */}
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />

      <Footer></Footer>
    </div>
  );
}

export default App;
