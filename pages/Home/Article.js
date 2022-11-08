
//@ts-check
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';

import { Autoplay, } from 'swiper'


// Import Swiper styles
import 'swiper/css';
import { Container, Card, Badge } from 'react-bootstrap';
import React from 'react';

function Article(props) {
    const swiper = useSwiper();


    return (
        <Container className='px-2'>


            <div className='d-flex mb-4 justify-content-between'>
                <h2>Explora bicis destacadas</h2>

                <div><button onClick={() => swiper.slideNext()}>Slide to the next slide</button></div>
            </div>

            <Swiper
                modules={[Autoplay,]}

                autoplay={{
                }}

                loop={true}
                breakpoints={{
                    "@0.00": {
                      slidesPerView: 1.15,
                      spaceBetween: 25,
                    },
                    "@0.40": {
                        slidesPerView: 1.15,
                        spaceBetween: 25,
                      },
                    "@0.50": {
                      slidesPerView: 1.25,
                      spaceBetween: 25,
                    },
                    "@0.60": {
                        slidesPerView: 1.25,
                        spaceBetween: 25,
                      },
                    "@0.70": {
                        slidesPerView: 1.30,
                        spaceBetween: 25,
                      },
                      "@0.80": {
                        slidesPerView: 1.40,
                        spaceBetween: 25,
                      },
                      "@0.90": {
                        slidesPerView: 1.75,
                        spaceBetween: 25,
                      },
                    "@1.00": {
                      slidesPerView: 2.20,
                      spaceBetween: 25,
                    },
                    "@1.10": {
                        slidesPerView: 2.50,
                        spaceBetween: 25,
                      },
                    "@1.20": {
                      slidesPerView: 3,
                      spaceBetween: 20,
                    },
                    "@1.30": {
                        slidesPerView: 3.25,
                        spaceBetween: 20,
                      },
                    "@1.40": {
                        slidesPerView: 3.50,
                        spaceBetween: 20,
                      },
                      "@1.50": {
                        slidesPerView: 4,
                        spaceBetween: 20,
                      },
                  }}

                slidesPerView="auto"
            >
                <SwiperSlide >    <Card style={{ width: '18rem' }}>
                    <div className='m-3'>
                        <Badge bg="primary" >Popular</Badge>
                        <Card.Img variant="top" src="/imagec.png" />
                    </div>
                    <Card.Body>
                        <Card.Text>
                            MTB · COLOMBIA
                        </Card.Text>
                        <Card.Title>Specialized S-Works Tarmac SL7 Road Bike - 2021, 56cm</Card.Title>
                        <Card.Text>
                            $6,499
                        </Card.Text>


                    </Card.Body>
                </Card></SwiperSlide>

                <SwiperSlide>    <Card style={{ width: '18rem' }}>
                    <div className='m-3'>
                        <Badge bg="primary" >Gran oferta</Badge>
                        <Card.Img variant="top" src="/imagec.png" />
                    </div>
                    <Card.Body>
                        <Card.Text>
                            MTB · PANAMÁ
                        </Card.Text>
                        <Card.Title>Specialized S-Works Tarmac SL7 Road Bike - 2021, 56cm</Card.Title>
                        <Card.Text>
                            $1,299
                        </Card.Text>

                    </Card.Body>
                </Card></SwiperSlide>

                <SwiperSlide>    <Card style={{ width: '18rem' }}>
                    <div className='m-3'>
                        <Badge bg="none" >Popular</Badge>
                        <Card.Img variant="top" src="/imagec.png" />
                    </div>
                    <Card.Body>
                        <Card.Text>
                            MTB · PANAMÁ
                        </Card.Text>
                        <Card.Title>Specialized S-Works Tarmac SL7 Road Bike - 2021, 56cm</Card.Title>
                        <Card.Text>
                            $1,299
                        </Card.Text>

                    </Card.Body>
                </Card></SwiperSlide>

                <SwiperSlide>    <Card style={{ width: '18rem' }}>
                    <div className='m-3'>
                        <Badge bg="primary" >Popular</Badge>
                        <Card.Img variant="top" src="/imagec.png" />
                    </div>
                    <Card.Body>
                        <Card.Text>
                            MTB · PANAMÁ
                        </Card.Text>
                        <Card.Title>Specialized S-Works Tarmac SL7 Road Bike - 2021, 56cm</Card.Title>
                        <Card.Text>
                            $1,299
                        </Card.Text>

                    </Card.Body>
                </Card></SwiperSlide>

                <SwiperSlide>    <Card style={{ width: '18rem' }}>
                    <div className='m-3'>
                        <Badge bg="primary" >Popular</Badge>
                        <Card.Img variant="top" src="/imagec.png" />
                    </div>
                    <Card.Body>
                        <Card.Text>
                            MTB · PANAMÁ
                        </Card.Text>
                        <Card.Title>Specialized S-Works Tarmac SL7 Road Bike - 2021, 56cm</Card.Title>
                        <Card.Text>
                            $1,299
                        </Card.Text>

                    </Card.Body>
                </Card></SwiperSlide>

            </Swiper>
        </Container>


    );
}

export default Article;