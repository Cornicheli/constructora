import '../style/card.css'
import { Card } from './card/Card'
import { CardService } from './card/CardService'
import { materiales, manoObra, caldera, ionizador, autocebante, pintura } from '../assets/image/service'
import { marcado, excavacion, armadura, hormigon, revestimiento, deObra } from '../assets/image/construccion'

const CardModels = () => {

      return (
            <main className="flex justify-center flex-col items-center h-auto">
                  <h1 className="text-4xl text-center font-bold my-10 text-[#0E2230]">
                        Nuestros servicios
                  </h1>
                  <div className=' flex flex-wrap flex-col-reverse xl:flex-row justify-around items-center mb-12 w-full'>
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