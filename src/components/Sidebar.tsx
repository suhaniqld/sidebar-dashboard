// Sidebar.tsx
import React from "react";
import "../styles/sidebar.css";
import RampChart from "./Rampchart";
import { Container, Row, Col, Card } from "react-bootstrap";
import { BsCloudSun, BsFillSunFill, BsFillCircleFill } from "react-icons/bs"; // Bootstrap icons

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

const WeatherCard = () => {
  return (
    <Container className="d-flex justify-content-center align-items-center weather-container">
      <Card className="weather-card">
        <Card.Body>
          <Row>
            <Col>
              <p className="text-small text-center">Melbourne</p>
              <h3 className="text-center">32°</h3>
              <p className="text-extra-small">Tue 16th 3:46 PM</p>
            </Col>
            <Col>
              <BsCloudSun size={80} />
            </Col>
          </Row>

          <Row className="text-start details">
            <Col>
              <p className="text-small">Humidity</p>
              <p className="text-small">Chance of Rain</p>
              <p className="text-small">Wind: 21 km/h</p>
              <p className="text-small">Tomorrow</p>
            </Col>
            <Col>
              <p>78%</p>
              <p>34%</p>
              <p>
                21 <span className="text-small"> km/h</span>
              </p>
              <p>
                30° <BsFillSunFill />
              </p>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
};

const DelayedRoutesCard = () => {
  return (
    <Container className="d-flex justify-content-center align-items-center delayed-routes-container">
      <Card>
        <Card.Header className="text-start">DELAYED ROUTES</Card.Header>
        <Card.Body>
          {routesData.map((route) => (
            <Row  key={route.id}>
              <Col xs={1} className="d-flex align-items-center">
                <BsFillCircleFill color={route.color} />
              </Col>
              <Col xs={6}>
                <div>{route.route}</div>
                <div className="text-extra-small">
                  {route.subRoutes.join(" \u2193 ")}
                </div>
              </Col>
              <Col xs={5} className="text-end">
                <div className="text-extra-small">
                  {route.distance}
                </div>
                <div>
                  {route.time}
                </div>
              </Col>
            </Row>
          ))}
        </Card.Body>
      </Card>
    </Container>
  );
};

const Sidebar: React.FC = () => {
  return (
    <div className="sidebar-container">
      {WeatherCard()}
      {DelayedRoutesCard()}
      <RampChart />
    </div>
  );
};
export default Sidebar;
