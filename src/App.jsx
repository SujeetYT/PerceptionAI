import Navbar from "./Components/Navbar"
import Bubble from "./assets/bubble"
import Hero from "./Pages/Hero";
import Section1 from "./Pages/Section1";
import Section2 from "./Pages/Section2";
import Footer from "./Components/Footer";

function App() {

  return (
    <>
      <Bubble color="linear-gradient( 45deg, #059dff, #059dff)" top={'250px'} left={'-250px'}/>
      <Bubble color="linear-gradient( 45deg, #fb5343, #6549d5)" top={'-250px'} right={'-250px'}/>
      <div className="bg-[#060606] w-[100%] relative">
        <Navbar/>
        <div className="sm:p-10 md:p-20 p-40 flex flex-col justify-center items-center">
          <Hero />
          <Section1 />
          <Section2 />
        </div>
        <Footer />
      </div>
    </>
  )
}

export default App
