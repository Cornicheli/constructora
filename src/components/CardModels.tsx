import plano from '../assets/plano.png'
import '../style/card.css'

const CardModels = () => {

      const piscinas = [
            {
                  "title": "Marcado",
                  "subTitle": "Una vez finalizada la excavación, se darán las pendientes exactas del fondo de la piscina.",
                  "image": "https://www.piscinadecor.com/wp-content/uploads/2023/07/piscinas-fibra-madrid.jpg",
            },
            {
                  "title": "Excavacion",
                  "subTitle": "Se ejecuta mediante máquina excavadora, previo trazado de la piscina sobre el terreno.",
                  "image": "https://vodapiscinas.com.ar/wp-content/uploads/2022/11/voda-piscinas-jacuzzi-redondo-scaled.jpg",
            },
            {
                  "title": "Armadura",
                  "subTitle": "Sobre el encofrado se colocará una doble capa de armadura, cuya cuantía y separaciones dependerán, en cada caso, del tipo de terreno y de las distintas profundidades de agua. Todo esto según los cálculos del equipo técnico.",
                  "image": "https://images.homify.com/v1475255908/p/photo/image/1662676/7.jpg",
            },
            {
                  "title": "Hormigon",
                  "subTitle": "Se colocará una vez finalizado el revoque. Los mismos pueden ser nacionales o importados con distintos tipos de guardas.",
                  "image": "https://piscinasmurillo.com.ar/wp-content/uploads/2021/07/piscina-2.jpg",
            },
            {
                  "title": "Revestimiento",
                  "subTitle": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis minus voluptates ut incidunt voluptatem reprehenderit voluptas impedit inventore iure eos?",
                  "image": "https://www.rubi.com/es/blog/wp-content/uploads/2022/08/MicrosoftTeams-image-16-1024x684.jpg",
            },
            {
                  "title": "De Obra",
                  "subTitle": "Sobre el encofrado y la armadura se proyectará una capa de Hormigón en piso y paredes. El espesor de la capa dependerá del tipo de terreno, de las profundidades de agua y se hará según los cálculos de nuestro departamento técnico.",
                  "image": "https://grupo-pages.com/wp-content/uploads/2021/05/Tipos-de-Piscinas-Construccio%CC%81n-GRUPO-PAGE%CC%80S-BCN.jpeg",
            }

      ]

      return (
            <main className="flex justify-center flex-col items-center h-auto">
                  <h1 className="text-4xl text-center font-bold my-10 text-[#0E2230]">
                        Nuestros servicios
                  </h1>
                  {/* flex-col xl:flex-row  */}
                  <div className=' flex flex-wrap flex-col xl:flex-row justify-around items-center mb-12 w-full'>
                        <img src={plano} alt="" className="h-92 w-92 lg:w-[475px] rounded-xl bg-cover" />
                        <div className='flex flex-col'>
                              <div className='grid grid-cols-1 grid-rows-4 gap-14 lg:grid-cols-3 lg:grid-rows-2 xl:grid-cols-3 xl:grid-rows-2'>
                                    <section className='item-card relative h-52 rounded shadow-2xl shadow-black m-1  xl:m-0 w-[275px] xl:w-[250px] 2xl:w-[300px]'>
                                          <img className='h-full w-full absolute -z-40' src='https://piscinas-iguazu.es/wp-content/uploads/2015/12/revestimiento-de-piscinas.jpg' alt='products' />
                                          <div className="txt p-4">
                                                <h2>Materiales</h2>
                                          </div>
                                    </section>

                                    <section className='item-card relative h-52 rounded shadow-2xl shadow-black m-1 xl:m-0 w-[275px] xl:w-[250px] 2xl:w-[300px]'>
                                          <img className='h-full w-full absolute -z-40' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSC1RtJXaWlufmvrfEz9aBB8qSutMclShumjZQOZ2ECh9mAzj6xzL073wgwTMeRV2el_yo&usqp=CAU' alt='products' />
                                          <div className="txt p-4">
                                                <h2>Mano de Obra</h2>
                                          </div>
                                    </section>
                                    <section className='item-card relative h-52 rounded shadow-2xl shadow-black m-1 xl:m-0 w-[275px] xl:w-[250px] 2xl:w-[300px]'>
                                          <img className='h-full w-full absolute -z-40' src='https://piscinasoportal.com.br/wp-content/uploads/2023/10/bomba-piscina.jpg' alt='products' />
                                          <div className="txt p-4">
                                                <h2>Sistema Preclimatizacion de Caldera</h2>
                                          </div>
                                    </section>

                                    <section className='item-card relative h-52 rounded shadow-2xl shadow-black m-1 xl:m-0 w-[275px] xl:w-[250px] 2xl:w-[300px]'>
                                          <img className='h-full w-full absolute -z-40' src='https://noticias.bidcom.com.ar/wp-content/uploads/2023/01/pileta-ionizador-que-es-y-para-que-sirve.png' alt='products' />
                                          <div className="txt p-4">
                                                <h2>Toma para sistema Ionizador</h2>
                                          </div>
                                    </section>

                                    <section className='item-card relative h-52 rounded shadow-2xl shadow-black m-1 xl:m-0 w-[275px] xl:w-[250px] 2xl:w-[300px]'>
                                          <img className='h-full w-full absolute -z-40' src='https://constructor.lacuarta.com/wp-content/uploads/2022/12/Bomba-filtro-piscina.jpg' alt='products' />
                                          <div className="txt p-4">
                                                <h2>Sistema de Filtrado y Bomba Autocebante</h2>
                                          </div>
                                    </section>

                                    <section className='item-card relative h-52 rounded shadow-2xl shadow-black m-1 xl:m-0 w-[275px] xl:w-[250px] 2xl:w-[300px]'>
                                          <img className='h-full w-full absolute -z-40' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzxUa7ddMjmZN1DuhZXkcWh20wcuqRht2lqLmQ-BhusQ4mbsVtPmn7Hp4phEf5h1WGvaE&usqp=CAU' alt='products' />
                                          <div className="txt p-4">
                                                <h2>Pintura para piscinas</h2>
                                          </div>
                                    </section>

                              </div>
                        </div>
                  </div>
                  <section className='bg-[#0E2230]'>
                        <h1 className="text-4xl text-center font-bold m-5 text-white">
                              Clientes contentos
                        </h1>
                        <div className=" flex flex-wrap flex-row gap-10 items-center justify-center pb-10">
                              {
                                    piscinas.map((item, index) =>
                                          <div className="flex flex-col items-center justify-center h-80 m-auto shadow-lg rounded-xl mx-5 my-5 hover:scale-105 transition duration-100 ease-out md:ease-in w-[375px] md:w-[450px] lg:w-[375px] 2xl:w-[475px]" key={index}>
                                                <div className=" w-full h-4/5 overflow-hidden rounded-t-xl">
                                                      <img className="w-full h-full rounded-t-xl bg-cover" src={item.image} alt="Image" />
                                                </div>
                                                <div className=" w-full flex flex-col justify-center h-1/4 bg-white rounded-b-xl">
                                                      <h1 className='font-semibold text-[#0E2230] ml-5 text-lg'>{item.title}</h1>
                                                </div>
                                          </div>
                                    )
                              }
                        </div>
                  </section>
            </main>
      )
}

export default CardModels