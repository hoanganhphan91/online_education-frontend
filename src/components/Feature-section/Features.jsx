import React from "react";
import { Container, Row, Col } from "reactstrap";
import './features.css';

const Features = () => {
  const FeatureData =[
    {
        title: 'Quick Learning',
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Quam ea, architecto iure deserunt ex quasi voluptates maxime voluptate iste nulla.",
        icon: 'ri-draft-line'
    },
    {
        title: 'All Time Support',
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Quam ea, architecto iure deserunt ex quasi voluptates maxime voluptate iste nulla.",
        icon: 'ri-discuss-line'
    },
    {
        title: 'Certification',
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Quam ea, architecto iure deserunt ex quasi voluptates maxime voluptate iste nulla.",
        icon: 'ri-contacts-book-line'
    },
]
  return (
    <section>
        <Container>
            <Row>
                {
                    FeatureData.map((item,index) =>
                    <Col lg='4' md='6' key={index}>
                    <div className="single__feature">
                        <h2 className="mb-3"><i class={item.icon}></i></h2>
                        <h6>{item.title}</h6>
                        <p>{item.desc}</p>
                    </div>
                </Col>
                )
                }
               
                

            </Row>
        </Container>
    </section>
  );
}
export default Features;