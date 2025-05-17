
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ProductDetails from './components/ProductDetails'
import Singup from './components/Singup'
function App() {
  
  return (
    <>
      {/* <Navbar/> */}
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/register" element={<Singup />}/>
          <Route path="/product/:id/" element={<ProductDetails />}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
