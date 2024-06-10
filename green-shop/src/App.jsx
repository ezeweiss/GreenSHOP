import './App.css'
import { ChakraProvider } from '@chakra-ui/react'
import Navbar from './components/Navbar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import PageNotFound from './components/PageNotFound/PageNotFound'


function App() {


  return (
    <>
      <ChakraProvider>
        <BrowserRouter>
          <Navbar/>
        
        <Routes>
          <Route path="/" element={<ItemListContainer title={'GREEN SHOP'}/>}/>
          <Route path="/category/:categoryId" element={<ItemListContainer saludo={'GREEN SHOP'}/>}/>
          <Route path="/item/:id" element={<ItemListContainer saludo={'GREEN SHOP'}/>}/>
          <Route path="*" element={<PageNotFound />}/>

        </Routes>
        </BrowserRouter>
         

      </ChakraProvider>
    </>
  )
}

export default App
