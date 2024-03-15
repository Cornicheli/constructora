import proyect from '../json/proyect.json'
import '../style/footer.css'

const Proyect = () => {
      return (
            <section className='relative' id='proyect'>
                  <div className="absolute -top-20" />
                  <h1 className='text-4xl text-center font-bold text-[#0E2230] pt-10'>Proyectos</h1>
                  <div className=" flex flex-wrap flex-row gap-10 items-center justify-center py-10">
                        {
                              proyect.proyect.map((item, index) =>
                                    <div className="flex flex-col items-center justify-center h-80 m-auto border-2 shadow-lg rounded-xl mx-5 my-5 hover:scale-105 transition duration-100 ease-out md:ease-in w-[375px] md:w-[450px] lg:w-[375px] 2xl:w-[475px]" key={index}>
                                          <div className=" w-full h-4/5 overflow-hidden rounded-t-xl">
                                                <img className="w-full h-full rounded-t-xl bg-cover" src={item.image} alt="Image" />
                                          </div>
                                          <div className=" w-full flex flex-col justify-center h-1/4">
                                                <h1 className='font-semibold text-[#0E2230] ml-5 text-lg'>{item.title}</h1>
                                                <h1 className='font-medium text-[#1b1b1cab] ml-5'>{item.subTitle}</h1>
                                          </div>
                                    </div>
                              )
                        }
                  </div>
            </section>

      )
}

export default Proyect