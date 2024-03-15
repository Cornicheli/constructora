import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import piscina11 from '../../assets/image/carrousel/piscinas/piscina11.webp'
import piscina2 from '../../assets/image/carrousel/piscinas/piscina2.webp'
import piscina3 from '../../assets/image/carrousel/piscinas/piscina3.jpg'
import piscina4 from '../../assets/image/carrousel/piscinas/piscina4.jpg'
import piscina5 from '../../assets/image/carrousel/piscinas/piscina5.webp'


const CarrouselPisci = () => {
      return (
            <Carousel>
                  <Carousel.Item interval={1000} className='xl:h-[800px] lg:h-[500px]'>
                        <img
                              className='h-full w-full bg-contain'
                              src={piscina11}
                              alt="Second slide"
                        />
                        <Carousel.Caption>
                              <h3>First slide label</h3>
                              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item interval={500} className='xl:h-[800px] lg:h-[500px]'>
                        <img
                              className='h-full w-full'
                              src={piscina2}
                              alt="Second slide"
                        />
                        <Carousel.Caption>
                              <h3>Second slide label</h3>
                              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item className='xl:h-[800px] lg:h-[500px]'>
                        <img
                              className='h-full w-full'
                              src={piscina3}
                              alt="Second slide"
                        />
                        <Carousel.Caption>
                              <h3>Third slide label</h3>
                              <p>
                                    Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                              </p>
                        </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item className='xl:h-[800px] lg:h-[500px]'>
                        <img
                              className='h-full w-full'
                              src={piscina4}
                              alt="Second slide"
                        />
                        <Carousel.Caption>
                              <h3>Third slide label</h3>
                              <p>
                                    Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                              </p>
                        </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item className='xl:h-[800px] lg:h-[500px]'>
                        <img
                              className='h-full w-full'
                              src={piscina5}
                              alt="Second slide"
                        />
                        <Carousel.Caption>
                              <h3>Third slide label</h3>
                              <p>
                                    Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                              </p>
                        </Carousel.Caption>
                  </Carousel.Item>
            </Carousel>
      );
}

export default CarrouselPisci