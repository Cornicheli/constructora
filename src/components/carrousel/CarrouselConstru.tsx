import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    house2,
    house5,
    house7,
    house10,
} from '@/assets/image/carrousel/house';

const CarrouselConstru = () => {
    return (
        <Carousel>
            <Carousel.Item
                interval={1000}
                className="lg:h-[500px] xl:h-[700px]">
                <img
                    className="h-full w-full"
                    src={house5}
                    alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item interval={500} className="lg:h-[500px] xl:h-[700px]">
                <img
                    className="h-full w-full"
                    src={house2}
                    alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item className="lg:h-[500px] xl:h-[700px]">
                <img
                    className="h-full w-full"
                    src={house7}
                    alt="Second slide"
                />
            </Carousel.Item>
            {/* <Carousel.Item className="lg:h-[500px] xl:h-[700px]">
                <img
                    className="h-full w-full"
                    src={house10}
                    alt="Second slide"
                />
            </Carousel.Item> */}
        </Carousel>
    );
};

export default CarrouselConstru;
