import Navbar from './components/Navbar'
import Footer from './components/Footer'

import Hero from './sections/Hero';
import About from './sections/About';
import Projects from './sections/Projects';
import Technologies from './sections/Technologies';
import Contact from './sections/Contact';

function App() {
  return (
    <>
    <Navbar/>
    <main className='bg-white'>
      <Hero/>
      <About/>
      <Projects/>
      <Technologies/>
      <Contact/>
    </main>
    <Footer/>
    </>
  )
}

export default App
