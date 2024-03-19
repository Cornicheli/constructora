import { AboutUs, Proyect, Typologies } from "../components"
import { WhatsappChat } from "../components/WhatsappChat";
import CarrouselConstru from "../components/carrousel/CarrouselConstru";
import Footer from "../components/Footer";

const Constructora = () => {
      return (
            <>
                  <CarrouselConstru />
                  <AboutUs />
                  <Proyect />
                  <Typologies />
                  <Footer />
                  <WhatsappChat />
            </>
      )
}

export default Constructora