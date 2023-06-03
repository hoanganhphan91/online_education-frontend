import React from "react";
import { Container, Row, Col } from "reactstrap";
import courseImg1 from '../../assets/images/web-development.png'
import courseImg2 from '../../assets/images/kids-learning.png'
import courseImg3 from '../../assets/images/seo.png'
import courseImg4 from '../../assets/images/ui-ux.png'
import FreeCourseCard from "./FreCourseCard";

import "./free-course.css";
const freeCourseData =[
    {
        id:'01',
        title:"Basic web development",
        imgUrl: courseImg1,
        students:54.3,
        rating:4.7
    },
    {
        id:'02',
        title:"Coding for Junior",
        imgUrl: courseImg2,
        students:3.3,
        rating:1.7
    },
    {
        id:'03',
        title:"Search Engine Optimization",
        imgUrl: courseImg3,
        students:5.3,
        rating:1.17
    },
    {
        id:'04',
        title:"Basic UX/UI design",
        imgUrl: courseImg4,
        students:51.3,
        rating:2.7
    },

]
const FreCourses =()=>{
    return (
        <section>
            <Container>
                <Row>
                    <Col lg ="12" className="text-center mb-5">
                        <h2>Our Free Courses</h2>
                    </Col>

                    {freeCourseData.map((item)=>(
                        <Col lg ="3" key={item.id}>
                             <FreeCourseCard item={item}></FreeCourseCard>
                        </Col>
                    ))}
                    
                </Row>
            </Container>
        </section>
    );
};

export default FreCourses;