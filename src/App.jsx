
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Artist from './pages/Artist'
import Sculptures from './pages/Sculptures'
import Paintings from './pages/Paintings'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {

  return (
    <>
    <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='artist' element={<Artist/>} />
        <Route path='sculptures' element={<Sculptures/>} />
        <Route path='paintings' element={<Paintings/>} />
      </Routes>
      <Footer/>

    </>
  )
}

export default App
