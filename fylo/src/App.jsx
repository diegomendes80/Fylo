import './App.css'
import './abstract/_root.scss';
import './abstract/_var.scss';
import { Header } from './components/Header';
import { Banner } from './components/Banner';
import { AdvantageSection } from './components/AdvantageSection';
import { WorkSection } from './components/WorkSection';

function App() {
 

  return (

    <main>
        <Header/>

        <Banner/>

        <AdvantageSection/>
        
        <WorkSection/>

    </main>
     
  )
}

export default App
