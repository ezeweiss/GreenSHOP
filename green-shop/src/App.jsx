import './App.css'
import { ChakraProvider } from '@chakra-ui/react'
import Navbar from './components/Navbar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import PageNotFound from './components/PageNotFound/PageNotFound'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import AboutUs from './components/AboutUs/AboutUs'
import Contact from './components/Contact/Contact'


function App() {


  return (
    <>
      <ChakraProvider>
        <BrowserRouter>
          <Navbar/>
        
        <Routes>
          <Route path="/" element={<ItemListContainer title={'GREEN SHOP'}/>}/>
          <Route path="/categoria/:categoria" element={<ItemListContainer/>}/>
          <Route path="/producto/:id" element={<ItemDetailContainer/>}/>
          <Route path="/nosotros" element={<AboutUs />}/>
          <Route path="/contacto" element={<Contact />}/>
          <Route path="*" element={<PageNotFound />}/>
        </Routes>

        </BrowserRouter>
      </ChakraProvider>
    </>
  )
}

export default App
