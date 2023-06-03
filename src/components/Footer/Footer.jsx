import React from "react";
import { Container,Row, Col, ListGroup, ListGroupItem } from "reactstrap";

const footerQuickLink =[
    {
        display: 'Home',
        url:'#'
    },
    {
        display: 'About us',
        url:'#'
    },
    {
        display: 'Courses',
        url:'#'
    },
    {
        display: 'Pages',
        url:'#'
    },
    {
        display: 'Blog',
        url:'#'
    }

]

const footerInforLinks =[
    {
        display: 'Private Policy',
        url:'#'
    },
    {
        display: 'Membership',
        url:'#'
    },
    {
        display: 'Purcharses Guide',
        url:'#'
    },
    {
        display: 'Term Of Service',
        url:'#'
    }
  

]
const Footer =() =>{
    return <footer className="footer">
        <Container>
            <Row>
                <Col lg = '3'>
                    <h2 className="d-flex align-items-center
                    gap-1">
                        <i class="ri-pantone-line"></i>
                        Learner.
                    </h2>
                    <div className="follow">
                        <p className="mb-0">Follow us on social media</p>
                        <span >
                            {" "}
                            <a href="https://www.facebook.com/">
                            <i class="ri-facebook-line"></i>
                            </a>
                            
                        </span>
                        <span >
                            {" "}
                            <a href="https://www.facebook.com/">
                            <i class="ri-linkedin-line"></i>
                            </a>
                            
                        </span>
                        <span >
                            {" "}
                            <a href="https://www.facebook.com/">
                            <i class="ri-twitter-line"></i>
                            </a>
                            
                        </span>
                        <span >
                            {" "}
                            <a href="https://www.facebook.com/">
                            <i class="ri-facebook-line"></i>
                            </a>
                            
                        </span>
                    </div>
                </Col>
                <Col lg ='3'>
                    <h6 className="fw-bold">Explore</h6>
                    <ListGroup>
                        {
                            footerQuickLink.map((item,index)=>(
                                <ListGroupItem key={index} className ='border-0  ps-0 link__item'>
                                    <a href={item.url}>{item.display}</a>
                                </ListGroupItem>
                            ))
                        }
                    </ListGroup>
                </Col>
                <Col lg ='3'>
                    <h6 className="fw-bold">Information</h6>
                    <ListGroup>
                        {
                            footerInforLinks.map((item,index)=>(
                                <ListGroupItem key={index} className ='border-0 ps-0 link__item'>
                                    <a href={item.url}>{item.display}</a>
                                </ListGroupItem>
                            ))
                        }
                    </ListGroup>
                </Col>

                <Col lg='3'>
                    <h6 className="fw-bold">Get In Touch</h6>
                    <p>Address: Đống Đa, Hà Nội</p>
                    <p>Phone: 0845151541547</p>
                    <p>Email: robotchomoinguoi@gmail.com</p>
                </Col>
            </Row>
        </Container>
    </footer>
}

export default Footer;