import "./App.css";
import Header from "./components/header/Header.js";
import Nav from "./components/nav/Nav.js";
import About from "./components/about/About.js";
import Experience from "./components/experience/Experience.js";
import Services from "./components/services/Services.js";
import Testimonials from "./components/testimonials/Testimonials.js";
import Contact from "./components/contact/Contact.js";
import Portfolio from "./components/portfolio/Portfolio.js";
import Footer from "./components/footer/Footer.js";

function App() {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experience></Experience>
      <Services></Services>
      <Portfolio></Portfolio>
      <Testimonials></Testimonials>
      <Contact></Contact>
      <Footer></Footer>
    </>
  );
}

export default App;
