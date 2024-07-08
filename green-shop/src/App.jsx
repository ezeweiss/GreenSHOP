import './App.css'
import { ChakraProvider } from '@chakra-ui/react'
import Navbar from './components/Navbar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import PageNotFound from './components/PageNotFound/PageNotFound'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import AboutUs from './components/AboutUs/AboutUs'
import Contact from './components/Contact/Contact'
import Checkout from './components/Checkout/Checkout'
import Cart from './components/Cart/Cart'
import { CartContextProvider } from './context/CartContext'


function App() {


  return (
    <>
      <ChakraProvider>
        <CartContextProvider>
          <BrowserRouter>
            <Navbar/>
          
          <Routes>
            <Route path='/' element={<ItemListContainer title={'Nuestros productos'}/>}/>
            <Route path='/categoria/:categoriaId' element={<ItemListContainer/>}/>
            <Route path='/producto/:id' element={<ItemDetailContainer/>}/>
            <Route path='/nosotros' element={<AboutUs />}/>
            <Route path='/contacto' element={<Contact />}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/checkout' element={<Checkout />}/>
            <Route path='*' element={<PageNotFound />}/>
          </Routes>

          </BrowserRouter>
        </CartContextProvider>
        
      </ChakraProvider>
    </>
  )
}

export default App
