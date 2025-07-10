import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import piscina2 from '@/assets/image/carrousel/piscinas/piscina2.webp';
import piscina4 from '@/assets/image/carrousel/piscinas/piscina4.jpg';
import piscina5 from '@/assets/image/carrousel/piscinas/piscina5.webp';
import piscina11 from '@/assets/image/carrousel/piscinas/piscina12.jpg';
import piscina01 from '@/assets/Carrusel/piscina01.jpg';

const CarrouselPisci = () => {
    return (
        <Carousel>
            <Carousel.Item interval={500} className="lg:h-[500px] xl:h-[700px]">
                <img
                    className="h-full w-full"
                    src={piscina2}
                    alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item className="lg:h-[500px] xl:h-[700px]">
                <img
                    className="h-full w-full"
                    src={piscina4}
                    alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item className="lg:h-[500px] xl:h-[700px]">
                <img
                    className="h-full w-full"
                    src={piscina5}
                    alt="Second slide"
                />
            </Carousel.Item>
        </Carousel>
    );
};

export default CarrouselPisci;
