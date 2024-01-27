import { Carrousel } from "../components"
import CardModels from "../components/CardModels"
import { LayoutFooter } from "../layout"
import LayoutPiscinas from "../layout/LayoutPiscinas"
import '../style/card.css'

const Piscinas = () => {

      return (
            <span id="piscinas">
                  <Carrousel />
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
                                    <p className="text-[#1b1b1cab] font-bold my-4">REALIZAMOS LAS MEJORES PISCINAS</p>
                                    <h1 className='py-4 font-semibold text-3xl text-[#0E2230] '>Somos constructores de <br /> piscinas y expertos en su mantenimiento</h1>
                                    <h3 className="text-lg my-4">La experiencia en las piscina de hormigon elaborado segun plano en vivienda unifamiliar
                                          y mantenimiento con extensa trayectoria de más de cuarenta años. Esta continuidad y permanencia en el mercado permite ofrecer la mayor garantía en sistemas constructivos y servicios para piscinas domiciliarias, clubes, estancias e instituciones deportivas en cualquier punto del país.
                                    </h3>
                                    <p className="text-[#1b1b1cab] font-bold my-4 text-base">Nos ubicamos en Berazategui centro, Prov. Bs As.</p>
                                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d419512.4122877679!2d-58.70162527817395!3d-34.76967881954899!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a32f1029b21ec7%3A0xcd3bcc3bd993eaca!2sBerazategui%20centro!5e0!3m2!1ses!2sar!4v1706205807964!5m2!1ses!2sar"
                                          width="450" height="250" style={{ border: 0, marginBottom: 10 }} loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
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