import typologies from "../json/typologies.json";

const Typologies = () => {
      return (
            // grid grid-flow-row-dense grid-cols-1 gap-x-8 gap-y-5 md:grid-cols-1 lg:grid-cols-1 h-min-96 mt-10
            <>
                  <div className="flex flex-col items-center justify-center w-3/4">
                        <h1 className=" text-4xl text-center font-bold  text-white">
                              Tipologías
                        </h1>
                        <p className="mt-5 text-center text-lg font-medium  text-white ">
                              La empresa actualmente ofrece tipologías estandarizadas de 1, 2 y 3
                              dormitorios, en una sola planta, en sus líneas Clásica, Moderna y
                              Premium. Además, dispone de un departamento especializado para el
                              desarrollo de proyectos a medida.
                        </p>
                        <p className="mt-10 text-center text-lg font-medium  text-white ">
                              Disponemos también de terminaciones avanzadas: tomado de juntas
                              interior / exterior con revoque plástico exterior aplicado.
                        </p>
                  </div>
                  <div className=" flex flex-wrap flex-row gap-16 items-center py-10 justify-center">
                        {typologies.typologies.map((item, index) => (
                              <div
                                    className="flex flex-col items-center justify-center shadow-md shadow-[#ffffff4d] h-max-64 m-auto relative rounded-xl hover:scale-105 transition duration-100 ease-out md:ease-in w-[375px] md:w-[450px] lg:w-[375px] 2xl:w-[475px]"
                                    key={index}
                              >
                                    <div className=" w-full h-42 group overflow-hidden rounded-xl">
                                          <img
                                                className="w-full h-full rounded-xl"
                                                src={item.image}
                                                alt="Image"
                                          />
                                    </div>
                                    <div className="bg-[#00000061] absolute w-36 h-10 bottom-0 left-5 rounded-t-md">
                                          <h1 className="font-semibold absolute bottom-2 left-5 text-white">
                                                {item.title}
                                          </h1>
                                    </div>
                              </div>
                        ))}
                  </div>
            </>
      );
};

export default Typologies;
