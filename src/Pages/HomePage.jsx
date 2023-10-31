import About from "../Components/About"
import Footer from "../Components/Footer"
import MyNavbar from "../Components/Navbar"
import Info from "../Components/info"
import Services from "../Components/Services"
import Expertise from "../Components/Expertise"
import Contact from "../Components/Contact"

function HomePage() {
  return (
    <div>
      <MyNavbar/>
      <About/>
      <Info/>
      <Services/>
      <Expertise/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default HomePage
