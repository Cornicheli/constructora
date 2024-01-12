
import aboutUs from '../json/aboutUs.json'

const AboutUs = () => {
      return (
            <>
                  <div className="flex justify-center items-center flex-col h-min-64">
                        <h1 className="text-4xl text-center font-bold text-white">SOBRE NOSOTROS</h1>
                        <p className="mt-10 text-center text-lg font-medium text-white w-2/4">Venimos de la construcción, de la arquitectura y de la ingeniería aplicada. Somos un equipo, creamos un concepto. Aplicamos la tecnología a las tareas tradicionales y el buen arte y oficio a la solución de nuevos desafíos.
                        </p>
                  </div>
                  <div className="grid grid-flow-row-dense grid-cols-1 gap-x-20 gap-y-5 md:grid-cols-1 lg:grid-cols-3">
                        {
                              aboutUs.aboutUs.map((item, index) =>
                                    <div className="items-center justify-around flex flex-col h-96 px-5 mt-5 w-[375px] md:w-[450px] lg:w-[275px] 2xl:w-[475px]" key={index}>
                                          <div className="relative w-44 h-44 group overflow-hidden">
                                                <img className="w-full h-full" src={item.image} alt="Image" />
                                          </div>
                                          <div className='flex justify-center items-center flex-col h-24'>
                                                <h1 className='text-cente text-white font-bold text-lg '>{item.title}</h1>
                                                <h3 className='text-center text-white text-ellipsis overflow-hidden '>{item.subTitle}</h3>
                                          </div>
                                    </div>
                              )
                        }
                  </div>
            </>
      )
}

export default AboutUs