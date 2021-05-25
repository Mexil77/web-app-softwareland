import React from "react";
import { Container, Row, Col } from "reactstrap";
const Hero = () => {
  return (
    <section className="section position-relative">
      <Container>
        <Row className="align-items-center">
          <Col lg={6}>
            <div className="pr-lg-5">
              <p className="text-uppercase text-primary font-weight-medium f-14 mb-4">
                Dragons
              </p>
              <h1 className="mb-4 font-weight-normal line-height-1_4">
                Mythological creatures with awesome{" "}
                <span className="text-primary font-weight-medium">Power</span>
              </h1>
              <p className="text-muted mb-4 pb-2">
                The belief in dragons is based on the various traditions about
                them. These appear in many cultures. In order to explain this
                phenomenon, the discovery of dinosaur or pterosaur fossils has
                been proposed that led those cultures to imagine similar beings.
              </p>
              <a href="#" className="btn btn-warning">
                Find Out How <span className="ml-2 right-icon">&#8594;</span>
              </a>
            </div>
          </Col>
          <Col lg={6}>
            <div className="mt-5 mt-lg-0">
              <img
                src="https://static.diariovasco.com/www/multimedia/201707/20/media/cortadas/juegotronos-kxIE-U40389609923MEG-624x385@Diario%20Vasco.jpg"
                alt="dragon fossil"
                className="img-fluid mx-auto d-block"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
export default Hero;
