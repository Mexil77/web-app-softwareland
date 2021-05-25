import React from "react";
import { Container, Row, Col } from "reactstrap";
const About = () => {
  return (
    <section className="section bg-light" id="about">
      <Container>
        <Row className="justify-content-center">
          <Col lg={6} md={8}>
            <div className="title text-center mb-5">
              <h3 className="font-weight-normal text-dark">
                About <span className="text-warning">Us</span>
              </h3>
              <p className="text-muted">
                We are a company focused on the study of these majestic beings
                and we also seek their safe protection and care.
              </p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={4}>
            <h2 className="font-weight-light line-height-1_6 text-dark mb-4">
              You are in the best hands
            </h2>
          </Col>
          <Col md={{ size: 7, offset: 1 }}>
            <Row>
              <Col md={6}>
                <h6 className="text-dark font-weight-light f-20 mb-3">
                  Our Mission
                </h6>
                <p className="text-muted font-weight-light">
                  Provide the largest and most reliable information about these
                  beings in addition to keeping our customers satisfied with the
                  various products we have.
                </p>
              </Col>
              <Col md={6}>
                <h6 className="text-dark font-weight-light f-20 mb-3">
                  Our Vision
                </h6>
                <p className="text-muted font-weight-light">
                  Find enough knowledge to be able to understand all the species
                  of dragons that exist.
                </p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
export default About;
