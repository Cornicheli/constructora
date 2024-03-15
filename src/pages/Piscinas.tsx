import CardModels from "../components/CardModels"
import { LayoutFooter } from "../layout"
import LayoutPiscinas from "../layout/LayoutPiscinas"
import '../style/card.css'
import CarrouselPisci from '../components/carrousel/CarrouselPisci'

const Piscinas = () => {

      return (
            <span id="piscinas">
                  <CarrouselPisci />
                  <main className=' flex flex-col xl:flex-row flex-wrap justify-center items-center h-auto w-full'>
                        <figure className="w-[350px] h-[500px] lg:w-[450px] lg:h-[550px] p-5">
                              <img
                                    className="w-full h-full rounded-xl bg-cover"
                                    src="https://www.elmueble.com/medio/2022/07/20/porche-de-canizo-con-sofas-al-lado-de-una-piscina-00546518_92a7d570_1280x1920.jpg"
                                    alt="imagen-pileta"
                              />
                        </figure>
                        <div className='grid grid-cols-1 grid-rows-1'>
                              <section className="m-5 lg:w-[600px] lg:ml-20">
                                    <p className="text-[#1b1b1cab] font-bold my-4 text-xl">Quiénes somos </p>
                                    <h1 className='py-4 font-semibold text-2xl text-[#0E2230] '>Somos una empresa dedicada a la construcción de piscinas, diseño y ejecución.</h1>
                                    <h3 className="text-lg my-4">Con mas de  <span className="font-bold">15 años</span> de experiencia en el rubro te brindamos responsabilidad y cumplimiento en la realización de tu proyecto soñado. Contamos con mas de 200 obras realizadas en AMBA y Cordoba.
                                          <br /> Contamos con un equipo de profesionales altamente calificados y las herramientas necesarias para lograr la piscina de tus sueños.
                                    </h3>
                              </section>
                        </div>
                  </main>
                  <LayoutPiscinas />
                  <CardModels />
                  <LayoutFooter />
            </span>
      )
}

export default Piscinas