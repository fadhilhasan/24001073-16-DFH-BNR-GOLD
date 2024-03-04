import "./scss/app.scss";
import "./scss/bootstrap.scss";
import "./scss/fontawesome.scss";
import "./js/bootstrap.bundle.min.js";
import "./js/main.js";
import Header from "./components/header/Header";
import About from "./components/rental/Rental";
import Why from "./components/why/Why";
import Testimonial from "./components/testimonials/Testimonial";
import Cta from "./components/cta/Cta.jsx";
import Faq from "./components/faq/Faq.jsx";
import Footer from "./components/footer/Footer.jsx";

function App() {
  return (
    <>
      <Header />
      <About />
      <Why />
      <Testimonial />
      <Cta />
      <Faq />
      <Footer />
    </>
  );
}

export default App;
