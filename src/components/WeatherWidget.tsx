import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { BsCloudSun, BsFillSunFill } from "react-icons/bs"; // Bootstrap icons

const WeatherWidget: React.FC = () => {
  return (
    <Container className="d-flex justify-content-center align-items-center weather-container">
      <Card className="weather-card">
        <Card.Body>
          <Row>
            <Col>
              <p data-testid="city" className="text-small text-center">
                Melbourne
              </p>
              <h3 data-testid="temperature" className="text-center">
                32°
              </h3>
              <p
                data-testid="dateTime"
                className="text-extra-small text-center"
              >
                Tue 16th 3:46 PM
              </p>
            </Col>
            <Col>
              <BsCloudSun size={80} data-testid="BsCloudSun" />
            </Col>
          </Row>

          <Row className="text-start details">
            <Col>
              <p className="text-small">Humidity</p>
              <p className="text-small">Chance of Rain</p>
              <p className="text-small">Wind</p>
              <p className="text-small">Tomorrow</p>
            </Col>
            <Col>
              <p>78%</p>
              <p>34%</p>
              <p>
                21 <span className="text-small"> kmh</span>
              </p>
              <div>
                30°
                <BsFillSunFill data-testid="BsFillSunFill" />
              </div>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default WeatherWidget;
