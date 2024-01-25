import Header from './components/Header'
import BestDeals from './components/BestDeals'
import Member from './components/Member'
import NewRelease from './components/NewRelease'
import NewFlavor from './components/NewFlavor'
import Device from './components/Device'
import Deviceb from './components/Deviceb'
import Devicec from './components/Devicec'
import Footer from './components/Footer'


function App() {

  return (
    <div className='bg-white max-w-screen space-y-8'>
      <Header />
      <BestDeals />
      <Member />
      <NewRelease />
      <NewFlavor />
      <Device />
      <Deviceb />
      <Devicec />
      <Footer />
    </div>
  )
}

export default App
