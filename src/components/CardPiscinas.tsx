import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useState } from 'react';
import {
      dis2, dis3, dis4, dis5,
      dis6, dis7, dis8, dis9,
      dis10, dis11, dis12, dis13,
      dis15, dis16, dis2a, dis3a,
      dis4a, dis5a, dis6a, dis7a,
      dis8a, dis9a, dis10a, dis11a,
      dis12a, dis13a, dis15a, dis16a,
} from '../assets/piscinas';

const CardPiscinas = () => {
      const piscinas = [
            { "id": 1, "image": dis2, "imageHover": dis2a },
            { "id": 2, "image": dis3, "imageHover": dis3a },
            { "id": 4, "image": dis4, "imageHover": dis4a },
            { "id": 5, "image": dis5, "imageHover": dis5a },
            { "id": 6, "image": dis6, "imageHover": dis6a },
            { "id": 7, "image": dis7, "imageHover": dis7a },
            { "id": 8, "image": dis8, "imageHover": dis8a },
            { "id": 9, "image": dis9, "imageHover": dis9a },
            { "id": 10, "image": dis10, "imageHover": dis10a },
            { "id": 11, "image": dis11, "imageHover": dis11a },
            { "id": 12, "image": dis12, "imageHover": dis12a },
            { "id": 13, "image": dis13, "imageHover": dis13a },
            // { "id": 14, "image": dis14, "imageHover": dis14a },
            { "id": 15, "image": dis15, "imageHover": dis15a },
            { "id": 16, "image": dis16, "imageHover": dis16a },
      ];

      const [hoverId, setHoverId] = useState<number | null>(null);

      const settings = {
            dots: true,
            infinite: true,
            speed: 700,
            slidesToShow: 4,
            slidesToScroll: 2,
      };

      return (
            <main className='w-full bg-[#0E2230] py-10'>
                  <h1 className='text-4xl text-center font-bold text-white'>Diseños</h1>
                  <div className="mt-5">
                        <Slider {...settings}>
                              {piscinas.map((d) => (
                                    <div className='flex rounded-2xl flex-row m-6 transform scale-105' key={d.id}>
                                          <div
                                                className=" h-46 rounded-2xl transition duration-700 ease-in-out w-[100px] border md:w-[188px] lg:w-[200px] 2xl:w-[250px]"
                                                onMouseEnter={() => setHoverId(d.id)}
                                                onMouseLeave={() => setHoverId(null)}
                                          >
                                                <img
                                                      className={`h-full w-full rounded-2xl transform scale-100 hover:scale-105 transition duration-500 ease-in-out ${hoverId === d.id ? 'hovered' : ''}`}
                                                      src={hoverId === d.id ? d.imageHover : d.image}
                                                      alt="Design"
                                                />
                                          </div>
                                    </div>
                              ))}
                        </Slider>
                  </div>

            </main>
      );
}

export default CardPiscinas;