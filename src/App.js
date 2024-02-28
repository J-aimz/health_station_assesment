// import logo from './logo.svg';
import { Route, Routes } from 'react-router-dom';
import { Cart, LandingPage, ProductPage } from './pages';
import CartContext from './utils/CartContext';
import { Nav } from './components';


function App() {

  return (
    <>
      <CartContext>
        <Nav />
        <div className="m-auto mt-8 max-w-screen-xl p-4 w-screen">
          <Routes>
            <Route path={'/'} element={<LandingPage />} />
            <Route path={'/product/:id'} element={<ProductPage />} />
            <Route path={'/cart'} element={<Cart />} />
            <Route path={'*'} element={<LandingPage />} />
          </Routes>
        </div>
      </CartContext>
    </>
  );
}

export default App;
