import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Error_500 from './error_pages/Error_500'
import Error_404 from './error_pages/Error_404'
import Diseases from './pages/Diseases'
import Hospitals from './pages/Hospitals'
import About from './pages/About'
import Footer from './components/Footer'
import Doctors from './pages/Doctors'
import useScrollToTop from './hooks/useScrollToTop'

const App = () => {

  //Hook to scroll to top on route change
  useScrollToTop()

  return (
    <main className='max-w-7xl px-4 lg:px-0 mx-auto'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/diseases' element={<Diseases />} />
        <Route path='/hospitals/:pageNumber' element={<Hospitals />} />
        <Route path='/doctors/:hospitalname' element={<Doctors />} />
        <Route path='/about' element={<About />} />

        <Route path='/500' element={<Error_500 />} />
        <Route path='*' element={<Error_404 />} />
      </Routes>
      <Footer />
    </main>
  )
}

export default App