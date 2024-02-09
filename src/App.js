import './App.css'; 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import RegisterForm from './forms/register';
import RegisterDriverForm from './forms/registerDriver';
import LoginForm from './forms/login';
import ApplicationLayer from './screens/applicationLayer';
import NetworkLayer from './screens/networkLayer';
import TransportLayer from './screens/transportLayer';
import UpdateForm from './forms/updateUser';
import Dashboard from './screens/dashboard';
import LandingPage from './screens/landingPage';
import ContactUs from './screens/contactUs';
import AboutUs from './screens/aboutUs';
import ProtectedRoute from './modules/auth/protectedRoute';
import AddOrderForm from './forms/addOrder';
import ProductsPage from './screens/productsPage';
import Cart from './screens/cart';
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/style.css";
import "./css/bootstrap.min.css";
import Checkout from './screens/checkout';
import ProductDetails from './screens/productDetails';
import AddProduct from './forms/addProduct';

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<ProtectedRoute />}>
          <Route path='/dashboard' element={<Dashboard />}/>
          <Route path='/register-driver' element={<RegisterDriverForm />}/>
          <Route path='/application-layer' element={<ApplicationLayer />}/>
          <Route path='/network-layer' element={<NetworkLayer />}/>
          <Route path='/transport-layer' element={<TransportLayer />}/>
          <Route path='/profile' element={<UpdateForm />}/>
        </Route>
        <Route path='/add-order' element={<AddOrderForm />}/>
        <Route path='/' element={<LandingPage />}/>
        <Route path='/products' element={<ProductsPage />}/>
        <Route path='/product' element={<ProductDetails />}/>
        <Route path='/add-product' element={<AddProduct />}/>
        <Route path='/cart' element={<Cart />}/>
        <Route path='/checkout' element={<Checkout />}/>
        <Route path='/register' element={<RegisterForm />}/>
        <Route path='/login' element={<LoginForm />}/>
        <Route path='/contact-us' element={<ContactUs />}/>
        <Route path='/about-us' element={<AboutUs />}/>
      </Routes>
    </Router>
  );
}

export default App;
