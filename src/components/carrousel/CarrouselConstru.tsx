import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import house1 from '../../assets/image/carrousel/house/house1.jpg'
import house2 from '../../assets/image/carrousel/house/house2.jpg'
import house3 from '../../assets/image/carrousel/house/house3.png'
import house4 from '../../assets/image/carrousel/house/house4.jpg'
import house5 from '../../assets/image/carrousel/house/house5.jpg'


const CarrouselConstru = () => {
      return (
            <Carousel>
                  <Carousel.Item interval={1000} className='xl:h-[800px] lg:h-[500px]'>
                        <img
                              className='h-full w-full bg-contain'
                              src={house1}
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
                              src={house2}
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
                              src={house3}
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
                              src={house4}
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
                              src={house5}
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

export default CarrouselConstru