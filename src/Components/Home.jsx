import Navbar from './Navbar'
import About from './About';
import Info from './info';
import Services from './Services';
import Expertise from './Expertise';
import Contact from './Contact';
import Footer from './Footer';
function Home() {
  return (
    <div>
      <Navbar/>
      <About/>
      <Info/>
      <Services/>
      <Expertise/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default Home
