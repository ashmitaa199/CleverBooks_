import './App.css'
import Navbar from './components/Navbar'
import HeroSec from './components/HeroSec'
import CardComp from './components/Card'
import cardData from './assets/cardData'
import Footer from './components/Footer'
import Testimonial from './components/Testimonial'
import { ProblemSection } from './components/ProblemSection'



function App() {
  const cardElements=cardData.map(data=>(
    <CardComp imgLink={data.imgLink} cardHeading={data.cardHeading} cardContent={data.cardContent}/>
  ))

  return (
    <div className='min-h-screen h-full  flex flex-col  items-center font-customFont'>
      <Navbar className="fixed"/>
      <HeroSec/>
      
      <h1 className='py-5 text-4xl text-center font-bold mt-16'>Four key questions answered by Crest</h1>
      <section className="grid md:grid-cols-2 lg:grid-cols-4 sm:grid-cols-1 px-24 py-10 gap-4">
      {cardElements}
      </section>
      <Testimonial/>
      <h1 className='text-4xl font-bold p-10 pt-44 text-center'>Get Crest and get...</h1>
      <ProblemSection />
      <Footer />
    </div>
  )
}

export default App
