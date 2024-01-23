import { Nav, Carrousel, Proyect } from './components'
import CardModels from './components/CardModels'
import { LayoutAboutUs, LayoutTypologies } from './layout'
import LayoutPiscinas from './layout/LayoutPiscinas'

const App = () => {
  return (
    <div className=" w-ful h-full">
      <Nav />
      <Carrousel />
      <LayoutAboutUs />
      <Proyect />
      <LayoutPiscinas />
      <CardModels />
      <LayoutTypologies />
    </div>
  )
}

export default App