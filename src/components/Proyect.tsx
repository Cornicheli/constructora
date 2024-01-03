import proyect from '../json/proyect.json'
import '../style/footer.css'

// grid grid-flow-row-dense grid-cols-1 gap-y-10 mt-10 mb-16 w-full md:grid-cols-1 lg:grid-cols-3
const Proyect = () => {
      return (
            <section className='relative'>
                  <div className="absolute -top-20" id="proyect" />
                  <h1 className='text-4xl text-center font-bold text-[#1b1b1c] pt-10'>Proyectos</h1>
                  <div className=" flex flex-wrap flex-row gap-10 items-center justify-center py-10">
                        {
                              proyect.proyect.map((item, index) =>
                                    <div className="flex flex-col items-center justify-center w-[450px] h-80 m-auto border-2 shadow-lg rounded-xl mx-5 my-5 hover:scale-105 transition duration-100 ease-out md:ease-in" key={index}>
                                          <div className=" w-full h-4/5 overflow-hidden rounded-t-xl">
                                                <img className="w-full h-full rounded-t-xl bg-cover" src={item.image} alt="Image" />
                                          </div>
                                          <div className=" w-full flex flex-col justify-center h-1/4">
                                                <h1 className='font-semibold text-[#1b1b1cd3] ml-5 text-lg'>{item.title}</h1>
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