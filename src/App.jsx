
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ProductDetails from './components/ProductDetails'
import Singup from './components/Singup'
import Women from './components/Women'
import Kids from './components/Kids'
import Electronics from './components/Electronics'
function App() {
  
  return (
    <>
      {/* <Navbar/> */}
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/register" element={<Singup />}/>
          <Route path="/women" element={<Women />}/>
          <Route path="/Kids" element={<Kids />}/>
          <Route path="/phones" element={<Electronics />}/>
          <Route path="/product/:id/" element={<ProductDetails />}/>
          
        </Routes>
      </Router>
    </>
  )
}

export default App
