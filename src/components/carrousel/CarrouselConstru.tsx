import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import house1 from '../../assets/image/carrousel/house/house1.jpg';
import house2 from '../../assets/image/carrousel/house/house2.jpg';
import house3 from '../../assets/image/carrousel/house/house3.png';
import house4 from '../../assets/image/carrousel/house/house4.jpg';
import house5 from '../../assets/image/carrousel/house/house5.jpg';

const CarrouselConstru = () => {
    return (
        <Carousel>
            <Carousel.Item
                interval={1000}
                className="lg:h-[500px] xl:h-[700px]">
                <img
                    className="h-full w-full bg-contain"
                    src={house1}
                    alt="Second slide"
                />
                <Carousel.Caption>
                    <h3 className="text-lg font-semibold">
                        Tu CASA a la medida TUS SUEÑOS
                    </h3>
                    <p className="text-lg font-semibold">
                        Eleji tu estilo, Lo personalizamos,Lo construimos
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={500} className="lg:h-[500px] xl:h-[700px]">
                <img
                    className="h-full w-full"
                    src={house2}
                    alt="Second slide"
                />
                <Carousel.Caption>
                    <h3 className="text-lg font-semibold">
                        Especialistas en PISCINAS
                    </h3>
                    <p className="text-lg font-semibold">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className="lg:h-[500px] xl:h-[700px]">
                <img
                    className="h-full w-full"
                    src={house3}
                    alt="Second slide"
                />
                <Carousel.Caption>
                    <h3 className="text-lg font-semibold">Third slide label</h3>
                    <p className="text-lg font-semibold">
                        Praesent commodo cursus magna, vel scelerisque nisl
                        consectetur.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className="lg:h-[500px] xl:h-[700px]">
                <img
                    className="h-full w-full"
                    src={house4}
                    alt="Second slide"
                />
                <Carousel.Caption>
                    <h3 className="text-lg font-semibold">Third slide label</h3>
                    <p className="text-lg font-semibold">
                        Praesent commodo cursus magna, vel scelerisque nisl
                        consectetur.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className="lg:h-[500px] xl:h-[700px]">
                <img
                    className="h-full w-full"
                    src={house5}
                    alt="Second slide"
                />
                <Carousel.Caption>
                    <h3 className="text-lg font-semibold">Third slide label</h3>
                    <p className="text-lg font-semibold">
                        Praesent commodo cursus magna, vel scelerisque nisl
                        consectetur.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default CarrouselConstru;
