import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Footer = () => {
    return(
        <footer className="mt-5">
            <Container>
                <Row className="border-top justify-content-between p-3" >
                   
                    <Col className="p-0 d-flex justify-content-end" sm={12}>
                        This site was made by Mayuri Patil
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer;