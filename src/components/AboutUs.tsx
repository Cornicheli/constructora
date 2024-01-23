import relojWhite from '../assets/reloj-white.png'
import socialWhite from '../assets/social-white.png'
import bookWhite from '../assets/bookmarks-white.png'


const AboutUs = () => {
      return (
            <>
                  <div className="flex justify-center items-center flex-col h-min-64">
                        <h1 className="text-4xl text-center font-bold text-white">SOBRE NOSOTROS</h1>
                        <p className="mt-10 text-center text-lg font-medium text-white w-2/4">Venimos de la construcción, de la arquitectura y de la ingeniería aplicada. Somos un equipo, creamos un concepto. Aplicamos la tecnología a las tareas tradicionales y el buen arte y oficio a la solución de nuevos desafíos.
                        </p>
                  </div>
                  <div className="grid grid-flow-row-dense grid-cols-1 gap-x-20 gap-y-5 md:grid-cols-1 lg:grid-cols-3">
                        <div className="items-center justify-around flex flex-col h-96 px-5 mt-5 w-[375px] md:w-[450px] lg:w-[275px] 2xl:w-[475px]" >
                              <div className="relative w-44 h-44 group overflow-hidden">
                                    <img className="w-full h-full" src={bookWhite} alt="Image" />
                              </div>
                              <div className='flex justify-center items-center flex-col h-24'>
                                    <h1 className='text-cente text-white font-bold text-lg'>MEJOR CALIDAD</h1>
                                    <h3 className='text-center text-white text-ellipsis overflow-hidden '> Innovamos en la construcción de sistemas modulares, estructurales y sustentables, que nos permiten desarrollos sin límites.</h3>
                              </div>
                        </div>
                        <div className="items-center justify-around flex flex-col h-96 px-5 mt-5 w-[375px] md:w-[450px] lg:w-[275px] 2xl:w-[475px]" >
                              <div className="relative w-44 h-44 group overflow-hidden">
                                    <img className="w-full h-full" src={relojWhite} alt="Image" />
                              </div>
                              <div className='flex justify-center items-center flex-col h-24'>
                                    <h1 className='text-cente text-white font-bold text-lg'>MENOR TIEMPO</h1>
                                    <h3 className='text-center text-white text-ellipsis overflow-hidden '>Aplicando los avances tecnológicos a los nuevos desafíos constructivos conseguimos optimizar materiales y plazos de realización.</h3>
                              </div>
                        </div>
                        <div className="items-center justify-around flex flex-col h-96 px-5 mt-5 w-[375px] md:w-[450px] lg:w-[275px] 2xl:w-[475px]" >
                              <div className="relative w-44 h-44 group overflow-hidden">
                                    <img className="w-full h-full" src={socialWhite} alt="Image" />
                              </div>
                              <div className='flex justify-center items-center flex-col h-24'>
                                    <h1 className='text-cente text-white font-bold text-lg'>ESPECIALISTAS</h1>
                                    <h3 className='text-center text-white text-ellipsis overflow-hidden '>Contamos con un grupo de asesoramiento que te orientará en el desarrollo de tu proyecto.</h3>
                              </div>
                        </div>
                  </div>
            </>
      )
}

export default AboutUs