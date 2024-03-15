import '../style/card.css'
import { Card } from './card/Card'
import { CardService } from './card/CardService'
import marcado from '../assets/image/construccion/marcado.jpg'
import excavacion from '../assets/image/construccion/excavacion.jpg'
import armadura from '../assets/image/construccion/armadura.jpg'
import hormigon from '../assets/image/construccion/hormigon.jpg'
import revestimiento from '../assets/image/construccion/revestimiento.jpg'
import deObra from '../assets/image/construccion/deObra.jpeg'
import materiales from '../assets/image/service/materiales.jpg'
import manoObra from '../assets/image/service/manoObra.jpg'
import caldera from '../assets/image/service/caldera.jpg'
import ionizador from '../assets/image/service/ionizador.png'
import autocebante from '../assets/image/service/autocebante.jpg'
import pintura from '../assets/image/service/pintura.jpg'

const CardModels = () => {

      return (
            <main className="flex justify-center flex-col items-center h-auto">
                  <h1 className="text-4xl text-center font-bold my-10 text-[#0E2230]">
                        Nuestros servicios
                  </h1>
                  <div className=' flex flex-wrap flex-col-reverse xl:flex-row justify-around items-center mb-12 w-full'>
                        {/* <img src={plano} alt="" className="h-92 w-[350px] lg:w-[450px] m-5 rounded-xl bg-cover" /> */}
                        <div className='flex flex-col'>
                              <div className='grid grid-cols-1 grid-rows-4 gap-14 lg:grid-cols-3 lg:grid-rows-2 xl:grid-cols-3 xl:grid-rows-2'>
                                    <CardService
                                          title={'Materiales'}
                                          image={materiales}
                                          alt={'materiales'}
                                    />
                                    <CardService
                                          title={'Mano de Obra'}
                                          image={manoObra}
                                          alt={'mano de obra'}
                                    />
                                    <CardService
                                          title={'Sistema de Filtrado y Bomba Autocebante'}
                                          image={autocebante}
                                          alt={'autocebante'}
                                    />
                                    <CardService
                                          title={'Luces y Accesorios'}
                                          image={ionizador}
                                          alt={'ionizador'}
                                    />
                                    <CardService
                                          title={'Sistema de Preclimatizacion'}
                                          image={caldera}
                                          alt={'caldera'}
                                    />
                                    <CardService
                                          title={'Pintura y Revestimiento'}
                                          image={pintura}
                                          alt={'pintura'}
                                    />
                              </div>
                        </div>
                  </div>
                  <section className='bg-[#0E2230]'>
                        <h1 className="text-4xl text-center font-bold m-5 text-white">
                              Proceso De Construcción
                        </h1>
                        <div className=" flex flex-wrap flex-row gap-10 items-center justify-center pb-10">
                              <Card
                                    title={'Demarcado'}
                                    image={marcado}
                              />
                              <Card
                                    title={'Excavacion'}
                                    image={excavacion}
                              />
                              <Card
                                    title={'Armadura de Acero'}
                                    image={armadura}
                              />
                              <Card
                                    title={'Hormigonado'}
                                    image={hormigon}
                              />
                              <Card
                                    title={'Revestimiento/Pintura'}
                                    image={revestimiento}
                              />
                              <Card
                                    title={'Entrega de Obra'}
                                    image={deObra}
                              />

                        </div>
                  </section>
            </main>
      )
}

export default CardModels