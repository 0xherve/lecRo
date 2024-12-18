import Header from "./sections/Header.jsx";
import Hero from "./sections/Hero.jsx";
import Features from "./sections/Features.jsx";
import Projects from "./sections/Projects.jsx";
import Faq from "./sections/Faq.jsx";
import Team from "./sections/Team.jsx";
import Footer from "./sections/Footer.jsx";
import Contact from "./sections/Contact.jsx";


function App() {

  return (
   <main className='overflow-hidden'>
      <Header />
      <Hero />
      <Features />
      <Projects />
      <Team />
      <Faq />
      <Contact/>
      <Footer/>
   </main>
  )
}

export default App
