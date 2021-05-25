import React from "react";
import { Container, Row, Col } from "reactstrap";
const Service = () => {
  const services = [
    {
      title: "Beasts of burden",
      desc: "Thanks to their ability to fly, they can help us carry big things",
    },
    {
      title: "Powerfull Parners",
      desc: "There greate abilities are so usefoll for large trabels and dificult works",
    },
    {
      title: "Heatlh",
      desc: "It is known that many of the parts of dragons as well as their blood mainly are of great benefit in many areas of medicine.",
    },
  ];

  return (
    <section className="section" id="service">
      <Container>
        <Row className="justify-content-center">
          <Col lg={6} md={8}>
            <div className="title text-center mb-5">
              <h3 className="font-weight-normal text-dark">
                <span className="text-warning">Services</span>
              </h3>
              <p className="text-muted">
                Although not all dragons can be tamed and also that term does
                not apply to them, if you can be companions of humans, which
                allows us to use their great abilities such as:
              </p>
            </div>
          </Col>
        </Row>
        <Row>
          {services.map((service, key) => (
            <Col key={key} lg={4} md={6}>
              <div>
                <div className="mb-5">
                  <i className={service.icon}></i>
                </div>
                <h5 className="text-dark font-weight-normal pt-1 mb-4">
                  {service.title}
                </h5>
                <p className="text-muted mb-4">{service.desc}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};
export default Service;
