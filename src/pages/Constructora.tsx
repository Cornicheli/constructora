import { AboutUs, Proyect } from "../components"
import CarrouselConstru from "../components/carrousel/CarrouselConstru";
import { LayoutTypologies } from '../layout';


const Constructora = () => {
      return (
            <>
                  <CarrouselConstru />
                  <AboutUs />
                  <Proyect />
                  <LayoutTypologies />
            </>
      )
}

export default Constructora