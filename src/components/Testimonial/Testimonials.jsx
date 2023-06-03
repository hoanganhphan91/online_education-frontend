import React from "react";
import Slider from "react-slick";
import './testimonial.css'

import {Container, Row, Col} from 'reactstrap';
import img from '../../assets/images/testimonial01.png'
const Testimonials = () => {

    const setting = {
        infinite: true,
        speed: 500,
        dots: true,
        slidesToShow: 1,
        autoplay:true,
        autoplaySpeed:3000,
        slidesToScroll: 1,
    }
    return <section>
        <Container>
            <Row>
                <Col lg='10' className="m-auto">
                    <div className="testimonial__wrapper d-flex
                    justify-content-between align-items-center">
                        <div className="testimonial__img w-50">
                            <img src={img} alt="" className="w-100"/>
                        </div>
                        <div className="testimonial__content w-50">
                            <h2 className="mb-4">Our Student Voice</h2>
                            <Slider {...setting}>
                                <div>
                                <div className="single__testimonial">
                                    <h6 className="mb-3 fw-bold">Exelence course of materials</h6>
                                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                                        Necessitatibus sunt quo est ipsum corrupti molestiae 
                                        reprehenderit veniam distinctio quos explicabo ab quaerat,
                                        voluptates dolore reiciendis accusamus dicta adipisci 
                                        temporibus voluptatibus!</p>
                                        <div className="student__info mt-4">
                                            <h6 className="fw-bold">Phan Hoang Anh</h6>
                                            <p>Hanoi, Vietnam</p>
                                         </div>
                                </div>
                                </div>
                                <div>
                                <div className="single__testimonial">
                                    <h6 className="mb-3 fw-bold">Exelence course of materials</h6>
                                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                                        Necessitatibus sunt quo est ipsum corrupti molestiae 
                                        reprehenderit veniam distinctio quos explicabo ab quaerat,
                                        voluptates dolore reiciendis accusamus dicta adipisci 
                                        temporibus voluptatibus!</p>
                                        <div className="student__info mt-4">
                                            <h6 className="fw-bold">Phan Hoang Anh</h6>
                                            <p>Hanoi, Vietnam</p>
                                         </div>
                                </div>
                                </div>
                                <div>
                                <div className="single__testimonial">
                                    <h6 className="mb-3 fw-bold">Exelence course of materials</h6>
                                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                                        Necessitatibus sunt quo est ipsum corrupti molestiae 
                                        reprehenderit veniam distinctio quos explicabo ab quaerat,
                                        voluptates dolore reiciendis accusamus dicta adipisci 
                                        temporibus voluptatibus!</p>
                                        <div className="student__info mt-4">
                                            <h6 className="fw-bold">Phan Hoang Anh</h6>
                                            <p>Hanoi, Vietnam</p>
                                         </div>
                                </div>
                                </div>
                            </Slider>
                        </div>
                        
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
};

export default Testimonials;