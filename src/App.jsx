
import './App.css'
import { Route,Routes,BrowserRouter } from 'react-router-dom'
import Shop from "./pages/shop/shop"
import Cart from "./pages/cart/cart"

import Navbar from './components/Navbar'
import PageNotFound from './pages/PageNotFound'
function App() {

  return (
    <div className='App'>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Shop />}/>
        <Route path='/cart' element={<Cart />} />
        <Route path='*' element={<PageNotFound />} />
        

      </Routes>
      </BrowserRouter>
    </div>
    
  )
}

export default App
