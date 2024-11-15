import CTASection from "./component/Cat"
import Footer from "./component/Footer"
import HeroSection from "./component/HeroSection"
import Navbar from "./component/Navebar"
import NewsSection from "./component/Newes"
import PartnersSection from "./component/Patner"
import ProviderSection from "./component/Provider"
import ServicesCard from "./component/ServicesCard"





function App() {
  
  return (
    <>
      <Navbar/>
      <HeroSection/>
      <PartnersSection/>
      <ServicesCard/>
      <NewsSection/>
      <ProviderSection/>
      <CTASection/>
      <Footer/>
      
    </>
  )
}

export default App
