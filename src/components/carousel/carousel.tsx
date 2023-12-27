import Carousel from 'react-bootstrap/Carousel';

function CarouselBasic() {
    return (
        <Carousel>
            <Carousel.Item interval={3000}>
            <img src={process.env.PUBLIC_URL + '/img/1.jpeg'} width={550} height={400} alt="one" />
            </Carousel.Item>
            <Carousel.Item interval={3000}>
            <img src={process.env.PUBLIC_URL + '/img/2.jpeg'} width={550} height={400} alt="one" />            
            </Carousel.Item>
            <Carousel.Item interval={3000}>
            <img src={process.env.PUBLIC_URL + '/img/3.jpeg'} width={550} height={400} alt="one" />            
            </Carousel.Item>
            <Carousel.Item interval={3000}>
            <img src={process.env.PUBLIC_URL + '/img/4.jpeg'} width={550} height={400} alt="one" />
            </Carousel.Item>
            <Carousel.Item interval={3000}>
            <img src={process.env.PUBLIC_URL + '/img/5.jpeg'} width={550} height={400} alt="one" />            
            </Carousel.Item>
            <Carousel.Item interval={3000}>
            <img src={process.env.PUBLIC_URL + '/img/6.jpeg'} width={550} height={400} alt="one" />            
            </Carousel.Item>
            <Carousel.Item interval={3000}>
            <img src={process.env.PUBLIC_URL + '/img/7.jpeg'} width={550} height={400} alt="one" />            
            </Carousel.Item>
        </Carousel>
    );
}

export default CarouselBasic;