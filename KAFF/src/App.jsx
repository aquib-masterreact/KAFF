import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { Routes,Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import AboutPage from './Pages/AboutPage';
import ContactPage from './Pages/ContactPage';
import ServicesPage from './Pages/ServicesPage';
import ExpertisePage from './Pages/ExpertisePage';



function App() {

  return (
    <>
     <Routes>
    <Route exact path="/" Component={HomePage}></Route>
    <Route path="/about" Component={AboutPage}></Route>
    <Route path="/contacts" Component={ContactPage}></Route>
    <Route path="/service" Component={ServicesPage}></Route>
    <Route path="/expertise" Component={ExpertisePage}></Route>
   </Routes>
      
    </>
  )
}

export default App
