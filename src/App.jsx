
import Brand from './components/Brand/Brand';
import OffersComponet from './components/Offers/OffersComponet';
import Step from './components/Steps/Step';
import Work from './components/Work/Work';
import AboutSection from './components/about/About';
import NavBar from './components/nav/NavBar'
import { Info } from './components/info/info';
import News from './components/News/News';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import { Fade } from 'react-awesome-reveal';

const App = () => {
  return (
    <div className="bg-gray-100">
      <div className="max-w-[1920px] mx-auto bg-white overflow-hidden">

      <NavBar/>
      {/* <div className='xl:bg-grid xl:bg-center z-10 xl:bg-repeat-y top-0 left-0 right-0 bottom-0 fixed'></div> */}
   <Fade direction='down' duration={1500} delay={200} >
   <Step/>
      <AboutSection/>
      <OffersComponet/>
      <Brand/>
      <Work/>
      <Info/>
      <News/>
      <Contact/>
      <Footer/>
   </Fade>
    
    {/* <div className="h-[3000px]"></div> */}
      </div>
   
      </div>
  )
}

export default App
