import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { BsFillCircleFill } from "react-icons/bs"; // Bootstrap icons

const routesData = [
  {
    id: 1,
    route: "Monash Fwy Out",
    distance: "13 km",
    time: "45 min",
    subRoutes: ["Kings Way", "EastLink"],
    color: "red",
  },
  {
    id: 2,
    route: "Monash Fwy Out",
    distance: "15 km",
    time: "28 min",
    subRoutes: ["Kings Way", "EastLink"],
    color: "red",
  },
  {
    id: 3,
    route: "Western Ring Rd",
    distance: "5 km",
    time: "5 min",
    subRoutes: ["West Gate Fwy", "Western Fwy"],
    color: "yellow",
  },
  {
    id: 4,
    route: "Eastern Fwy",
    distance: "15 km",
    time: "25 min",
    subRoutes: ["Hoddle St", "Springvale Rd"],
    color: "yellow",
  },
];

const DelayedRoutes: React.FC = () => {
  return (
    <Container className="d-flex justify-content-center align-items-center delayed-routes-container">
      <Card>
        <Card.Header className="text-start">DELAYED ROUTES</Card.Header>
        <Card.Body>
          {routesData.map((route) => (
            <Row key={route.id}>
              <Col xs={1} className="d-flex align-items-center">
                <BsFillCircleFill color={route.color} size={20} />
              </Col>
              <Col xs={6}>
                <div>{route.route}</div>
                <div className="text-extra-small">
                  {"\u2193 "}
                  {route.subRoutes.join("  ")}
                </div>
              </Col>
              <Col xs={5} className="text-end">
                <div className="text-extra-small">{route.distance}</div>
                <div className="text-highlighted">{route.time}</div>
              </Col>
            </Row>
          ))}
        </Card.Body>
      </Card>
    </Container>
  );
};

export default DelayedRoutes;
