import About from "../Components/About";
import Footer from "../Components/Footer";
import MyNavbar from "../Components/Navbar";
 // Make sure the component name matches the import statement
 import Info from "../Components/info";
import Services from "../Components/Services";
import Expertise from "../Components/Expertise";
import Contact from "../Components/Contact";
import "../App.css";
function HomePage() {
  return (
    <div>
      <MyNavbar />
      <About className="about" id="home"/>
      <Info/>
      <Services className="services" id="service"/>
      <Expertise className="expertise"id="expertise" />
      <Contact className="contact"id="contacts" />
      <Footer className="footer" />
    </div>
  );
}

export default HomePage;
