import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavbarCommon from './pages/Home/components/Navbar';
import Home from './pages/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from "react-redux";
import Product from './pages/Product/Product';
import Cart from './pages/Cart';
import Order from './pages/Order';
import Contact from './pages/Contact/Contact';
import DetailProduct from './pages/DetailProduct/DetailProduct';
import UserInfo from './pages/UserInfo';
import Login from './pages/Login';
import Register from './pages/Register';
import ProtectedRoute from './pages/ProtectedRoute';

function App() {
  return (
    <div className="App primary-background">
      <NavbarCommon />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<ProtectedRoute component={Cart} />} />
        <Route path="/order" element={<ProtectedRoute component={Order} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/product" element={<ProtectedRoute component={Product} />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/user/info" element={<ProtectedRoute component={UserInfo} />} />
        <Route path="/product/detail/:id" element={<ProtectedRoute component={DetailProduct} />} />
      </Routes>
    </div>
  );
}

export default App;
