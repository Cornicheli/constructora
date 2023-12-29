import { Nav, Carrousel, Proyect } from './components'
import { LayoutAboutUs, LayoutTypologies } from './layout'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className=" w-ful h-full">
      <Nav />
      <Carrousel />
      <LayoutAboutUs />
      <Proyect />
      <LayoutTypologies />
      <Footer />
    </div>
  )
}

export default App