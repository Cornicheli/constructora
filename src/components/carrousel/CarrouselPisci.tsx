import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import piscina11 from '../../assets/image/carrousel/piscinas/piscina12.jpg';
import piscina2 from '../../assets/image/carrousel/piscinas/piscina2.webp';
import piscina4 from '../../assets/image/carrousel/piscinas/piscina4.jpg';
import piscina01 from '../../assets/Carrusel/piscina01.jpg';
import piscina5 from '../../assets/image/carrousel/piscinas/piscina5.webp';

const CarrouselPisci = () => {
    return (
        <Carousel>
            <Carousel.Item
                interval={1000}
                className="lg:h-[500px] xl:h-[700px]">
                <div
                    className={`h-full w-full bg-cover bg-center`}
                    style={{ backgroundImage: `url(${piscina11})` }}
                />

                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>
                        Nulla vitae elit libero, a pharetra augue mollis
                        interdum.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={500} className="lg:h-[500px] xl:h-[700px]">
                <div
                    className={`h-full w-full bg-cover bg-center`}
                    style={{ backgroundImage: `url(${piscina2})` }}
                />

                {/* <img
                              className='h-full w-full'
                              src={piscina2}
                              alt="Second slide"
                        /> */}
                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className="lg:h-[500px] xl:h-[700px]">
                <img
                    className="h-full w-full"
                    src={piscina01}
                    alt="Second slide"
                />
                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl
                        consectetur.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className="lg:h-[500px] xl:h-[700px]">
                <img
                    className="h-full w-full"
                    src={piscina4}
                    alt="Second slide"
                />
                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl
                        consectetur.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className="lg:h-[500px] xl:h-[700px]">
                <img
                    className="h-full w-full"
                    src={piscina5}
                    alt="Second slide"
                />
                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl
                        consectetur.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default CarrouselPisci;
