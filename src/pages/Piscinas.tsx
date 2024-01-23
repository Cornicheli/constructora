
const Piscinas = () => {

      const piscinas = [
            {
                  "title": "Marcado",
                  "subTitle": "Una vez finalizada la excavación, se darán las pendientes exactas del fondo de la piscina.",
                  "image": "https://www.lafaustinavgb.com.ar/wp-content/uploads/2022/05/la-faustina-casas-de-campo-villa-general-belgrano-3.jpg",
            },
            {
                  "title": "Excavacion",
                  "subTitle": "Se ejecuta mediante máquina excavadora, previo trazado de la piscina sobre el terreno.",
                  "image": "https://www.excavacionesmuchamiel.com/wp-content/uploads/2021/07/excavaciones-muchamiel-piscinas.jpeg",
            },
            {
                  "title": "Armadura",
                  "subTitle": "Sobre el encofrado se colocará una doble capa de armadura, cuya cuantía y separaciones dependerán, en cada caso, del tipo de terreno y de las distintas profundidades de agua. Todo esto según los cálculos del equipo técnico.",
                  "image": "https://www.lafaustinavgb.com.ar/wp-content/uploads/2022/05/la-faustina-casas-de-campo-villa-general-belgrano-3.jpg",
            },
            {
                  "title": "Excavacion",
                  "subTitle": "Sobre el encofrado y la armadura se proyectará una capa de Hormigón en piso y paredes. El espesor de la capa dependerá del tipo de terreno, de las profundidades de agua y se hará según los cálculos de nuestro departamento técnico.",
                  "image": "https://www.lafaustinavgb.com.ar/wp-content/uploads/2022/05/la-faustina-casas-de-campo-villa-general-belgrano-3.jpg",
            }
            ,
            {
                  "title": "Hormigon",
                  "subTitle": "Se colocará una vez finalizado el revoque. Los mismos pueden ser nacionales o importados con distintos tipos de guardas.",
                  "image": "https://i.ytimg.com/vi/1F9JimAh7Pw/maxresdefault.jpg",
            },
            {
                  "title": "Revestimiento",
                  "subTitle": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis minus voluptates ut incidunt voluptatem reprehenderit voluptas impedit inventore iure eos?",
                  "image": "https://i.ytimg.com/vi/N_1gCFQVOVc/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLA_1qD6A2SlFecsaKy3_jnId9LePQ",
            }

      ]

      return (
            <main id="piscinas" className="flex items-center justify-center flex-col">
                  <section className='flex items-center justify-center flex-wrap'>
                        {
                              piscinas.map((item, index) =>
                                    // <div className="h-80 flex-wrap bg-cover relative m-5 rounded-xl w-[375px] md:w-[450px] lg:w-[375px] 2xl:w-[475px]" key={index} style={{ backgroundImage: `url(${item.image})` }}>
                                    <div key={index} className='item-card relative rounded-xl h-80 w-[375px] md:w-[450px] lg:w-[375px] 2xl:w-[475px]'>
                                          <img className='h-100 w-100 rounded-xl bg-cover' src={item.image} alt='products' />
                                          <h1 className='absolute bottom-5 w-full text-center font-semibold text-white text-xl'>{item.title}</h1>
                                          <h3 className="txt">{item.subTitle}</h3>
                                    </div>
                              )
                        }
                  </section>
            </main>
      )
}

export default Piscinas