import { useState, useEffect } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';

function Carrousel() {
      const slides = [
            {
                  url: 'https://www.waterair.com/wp-content/uploads/2021/10/choisir-sa-piscine.jpg',
            },
            {
                  url: 'https://salamancamolina.com/wp-content/uploads/2019/08/architecture-1477098.jpg',
            },
            {
                  url: 'https://www.topciment.com/imagenes/news/hormigon-impreso-piscina-con-molde-rosa-de-los-vientos.jpg',
            },
            {
                  url: 'https://www.topciment.com/imagenes/news/vivienda-con-terraza-de-hormigon-impreso-piscina.jpg',
            },
            {
                  url: 'https://www.arquitecturaydiseno.es/medio/2020/09/22/casa-prefabricada-clt-casa-z1-zest-architecture-exterior_a58949e6_1500x1000.jpg',
            },
      ];

      const [currentIndex, setCurrentIndex] = useState(0);

      const prevSlide = () => {
            const isFirstSlide = currentIndex === 0;
            const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
            setCurrentIndex(newIndex);
      };

      const nextSlide = () => {
            const isLastSlide = currentIndex === slides.length - 1;
            const newIndex = isLastSlide ? 0 : currentIndex + 1;
            setCurrentIndex(newIndex);
      };

      const goToSlide = (slideIndex: number) => {
            setCurrentIndex(slideIndex);
      };

      const [intervalId, setIntervalId] = useState(null);

      const sinUso = intervalId
      sinUso

      useEffect(() => {
            const id = setInterval(() => {
                  nextSlide();
            }, 4000);
            setIntervalId(null);

            return () => clearInterval(id);
      }, [currentIndex]);



      return (
            <div className=' h-[800px] w-full m-auto relative group' >
                  <div
                        style={{ backgroundImage: `url(${slides[currentIndex].url})`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', }}
                        className='w-full h-full duration-500 '
                  >
                        <div className='h-52 w-96 rounded-t-xl bg-[#00000061] absolute bottom-0 left-60  hidden sm:block '>
                              <h1 className='text-xl font-medium text-white pl-5 my-2'>CONSTRUCCIÓN - REMODELACIÓN</h1>
                              <h3 className='text-lg text-white pl-5'>Ofrecemos un diseño personalizado de acuerdo a sus requerimientos, gustos y necesidades.</h3>
                              <div className='mt-7 ml-5 h-5'>
                                    <a
                                          className='p-3 hover:border-[1px] text-white rounded-lg duration-200'
                                          href="#">MAS INFO</a>
                              </div>
                        </div>
                  </div>

                  {/* Left Arrow */}
                  <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                        <BsChevronCompactLeft onClick={prevSlide} size={30} />
                  </div>
                  {/* Right Arrow */}
                  <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                        <BsChevronCompactRight onClick={nextSlide} size={30} />
                  </div>
                  <div className=''>
                        {/* flex top-4 justify-center py-2 */}

                        {slides.map((slide, slideIndex) => (
                              <div
                                    key={slideIndex}
                                    onClick={() => goToSlide(slideIndex)}
                                    className='text-2xl cursor-pointer'
                              >
                                    <div style={{ display: 'none' }}>{slide.url}</div>
                              </div>
                        ))}
                  </div>
            </div >
      );
}

export default Carrousel;