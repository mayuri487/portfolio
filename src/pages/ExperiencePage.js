import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from "react-bootstrap/Button";

import Container from 'react-bootstrap/Container';
import Tilt from "react-tilt";
import Helmet from 'react-helmet';


import Content from '../components/Content';
import Hero from '../components/Hero';

const ExperienceCard = (props) => {
  return (
    <div>
      <Helmet>
        <style>{'body { background-color: powderblue; }'}</style>
      </Helmet>
      <Hero title={props.title} />
      <Container>
        <Tilt options={{ max: 25 }}>
          <Card className="jumbo-style">
            <Card.Header as="h5" className="d-flex justify-content-center flex-wrap">

            </Card.Header>
            <Card.Body className="d-flex justify-content-center flex-column">
              <div>
                <Card.Title className="text-center">Naaniz.</Card.Title>
              </div>
              <div>
                <Card.Text className="text-center style">
                  <strong>Domain:</strong> Flutter App Development
                    <br />
                  <strong>Role:</strong> Flutter Developer Intern
                    <br />
                  <strong>Description:</strong> Creating Ui, frontend, integrating app with firebase and REST api.
                    <br />
                  <strong>Technology:</strong> Dart, Flutter
                    <br />
                  <strong>Duration:</strong> 1 month(24th June to 24th July 2020)

                  </Card.Text>
                <a href="https://drive.google.com/file/d/18qy7PnPQBqrli6uCRsLZ99ETt_OAqX79/view?usp=drivesdk" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline-dark" title="My other projects">
                    <i className="fab fa-github-square"></i> See Certificate
                                    </Button>
                </a>

              </div>
            </Card.Body>
          </Card>
        </Tilt>
      </Container>
    </div>

  )
}

export default ExperienceCard;

