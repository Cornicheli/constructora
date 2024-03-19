import { AboutUs, Proyect } from "../components"
import { WhatsappChat } from "../components/WhatsappChat";
import CarrouselConstru from "../components/carrousel/CarrouselConstru";
import { LayoutTypologies } from '../layout';


const Constructora = () => {
      return (
            <>
                  <CarrouselConstru />
                  <AboutUs />
                  <Proyect />
                  <LayoutTypologies />
                  <WhatsappChat />
            </>
      )
}

export default Constructora