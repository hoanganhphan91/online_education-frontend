import React from "react";
import { Container, Row, Col } from "reactstrap";
import "./company-section.css";

const Company = () => {
    return (
        <section>
            <Container>
                <Row>
                    <Col lg='2' md = '3'>
                            <h3 className="d-flex align-items-center gap -1">
                            <i class="ri-vimeo-fill"></i>Vimeo</h3>
                    </Col>
                    <Col lg='2' md = '3'>
                        <h3 className="d-flex align-items-center gap -1">
                        <i class="ri-pinterest-fill"></i>Pinterest</h3>
                    </Col>
                    <Col lg='2' md = '3'>
                    <h3 className="d-flex align-items-center gap -1">
                    <i class="ri-amazon-line"></i>Amazon</h3>
                    </Col>
                    <Col lg='2' md = '3'>
                    <h3 className="d-flex align-items-center gap -1">
                        <i class="ri-apple-fill"></i>Apple</h3>
                    </Col>
                    <Col lg='2' md = '3'>
                    <h3 className="d-flex align-items-center gap -1">
                        <i class="ri-facebook-fill"></i>Facebook</h3>
                    </Col>
                    <Col lg='2' md = '3'>
                    <h3 className="d-flex align-items-center gap -1">
                        <i class="ri-finder-fill"></i>Finder</h3>
                    </Col>

                </Row>
            </Container>
        </section>
      );
};
export default Company;