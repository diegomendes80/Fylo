import './App.css'
import './abstract/_root.scss';
import './abstract/_var.scss';
import { Header } from './components/Header';
import { Banner } from './components/Banner';
import { AdvantageSection } from './components/AdvantageSection';

function App() {
 

  return (

    <main>
        <Header/>

        <Banner/>

        <AdvantageSection/>
        
    </main>
     
  )
}

export default App
