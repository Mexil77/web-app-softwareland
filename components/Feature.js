import React from "react";
import { Container, Row, Col } from "reactstrap";
const FeatureBox = (props) => {
  return (
    <>
      {props.features.map((feature, key) =>
        feature.id % 2 !== 0 ? (
          <Row
            key={key}
            className={
              feature.id === 1
                ? "align-items-center"
                : "align-items-center mt-5"
            }
          >
            <Col md={5}>
              <div>
                <img
                  src={feature.img}
                  alt=""
                  className="img-fluid d-block mx-auto"
                />
              </div>
            </Col>
            <Col md={{ size: 6, offset: 1 }}>
              <div className="mt-5 mt-sm-0 mb-4">
                <div className="my-4">
                  <i className={feature.icon}></i>
                </div>
                <h5 className="text-dark font-weight-normal mb-3 pt-3">
                  {feature.title}
                </h5>
                <p className="text-muted mb-3 f-15">{feature.desc}</p>
                <a href={feature.link} className="f-16 text-warning">
                  Read More <span className="right-icon ml-2">&#8594;</span>
                </a>
              </div>
            </Col>
          </Row>
        ) : (
          <Row key={key} className="align-items-center mt-5">
            <Col md={6}>
              <div className="mb-4">
                <div className="my-4">
                  <i className="mdi mdi-account-group"></i>
                </div>
                <h5 className="text-dark font-weight-normal mb-3 pt-3">
                  {feature.title}
                </h5>
                <p className="text-muted mb-3 f-15">{feature.desc}</p>
                <a href={feature.link} className="f-16 text-warning">
                  Read More <span className="right-icon ml-2">&#8594;</span>
                </a>
              </div>
            </Col>
            <Col md={{ size: 5, offset: 1 }} className="mt-5 mt-sm-0">
              <div>
                <img
                  src={feature.img}
                  alt=""
                  className="img-fluid d-block mx-auto"
                />
              </div>
            </Col>
          </Row>
        )
      )}
    </>
  );
};
const Feature = () => {
  const features = [
    {
      id: 1,
      img: "https://2.bp.blogspot.com/-OPtQv1SHRPc/WsBmH0eNCbI/AAAAAAAAJqU/Uqv0OwrCAhIlbLd1_Guzg6Li9496H9PCwCLcBGAs/s640/dragones.png",
      title: "Western Dragons",
      desc: "Western Dragons are Dragons with four legs and a pair of wings, i.e. six limbs. This makes them different from any other kind of vertebrate. How this is possible is discussed in the article about Flight.",
      link: "/",
    },
    {
      id: 2,
      img: "data:image/jpeg;base64,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",
      title: "Oriental Dragons",
      desc: "The Oriental Dragon (also known as the Eastern Dragon) is another one of the world's most commonly known dragons. They are found in folklore, mythology, and religion all throughout East Asia.",
      link: "/",
    },
  ];
  return (
    <section className="section" id="feature">
      <Container>
        <Row className="justify-content-center">
          <Col lg={6} md={8}>
            <div className="title text-center mb-5">
              <h3 className="font-weight-normal text-dark">
                <span className="text-warning">Features</span>
              </h3>
              <p className="text-muted">
                First of all, we have 2 types of dragons, the oriental ones and
                the western ones. This is very important since throughout
                history they are known for their very different characteristics.
              </p>
            </div>
          </Col>
        </Row>
        <FeatureBox features={features} />
      </Container>
    </section>
  );
};
export default Feature;
