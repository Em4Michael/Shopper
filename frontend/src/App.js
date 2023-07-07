import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Navbar from "./components/Navbar/Navbar";
//import ProductScreen from './components/Product/productScreen';
//import ProductDetails from './components/ProductDetails/ProductDetails'

function App() {
  return (
    <Router>
         <Navbar /> 
        <main>
          <Routes>
            {/* <Route path='/' element={<ProductScreen />} />
            <Route path='/product/:id' element={<ProductDetails />} />
            <Route path='/Products' element={<ProductScreen />} />
            <Route path='/Services' element={<Services />} />
            <Route path='/Home' element={<Home />} />
            <Route path='/SignUp' element={<SignUp />} />
            <Route path='/ContactUs' element={<ContactUs />} />
            <Route path='/Cart' element={<Cart />} /> */}
          </Routes>
        </main>
       <Footer /> 
    </Router>
  )
}

export default App