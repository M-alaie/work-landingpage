
import Step from './components/Steps/Step';
import AboutSection from './components/about/About';
import NavBar from './components/nav/NavBar'
const App = () => {
  return (
    <div className="bg-gray-100">
      <div className="max-w-[1920px] mx-auto bg-white overflow-hidden">
      <NavBar/>
      <Step/>
      <AboutSection/>
    
    <div className="h-[3000px]"></div>
      </div>
   
      </div>
  )
}

export default App
