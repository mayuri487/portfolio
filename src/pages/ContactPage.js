import React from 'react';
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Helmet from 'react-helmet';

import Hero from '../components/Hero';
import Form from 'react-bootstrap/Form';
import Content from '../components/Content';


class ContactPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            message: '',
            disabled: false,
            emailSent: null,
        }
    }

    handleChange = (e) => {
        const target = e.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();

        this.setState({
            disabled: true,
            emailSent: false
        })
    }

    render() {
        return (
            <div>
            <Helmet>
                <style>{'body { background-color: powderblue; }'}</style>
            </Helmet>
                <Hero title={this.props.title} />

                <Content>
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Group>
                            <Form.Label htmlFor="full-name">Full Name</Form.Label>
                            <Form.Control id="full-name" name="name" type="text" value={this.state.name} onChange={this.handleChange} placeholder="Name" />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label htmlFor="email">Email</Form.Label>
                            <Form.Control id="email" name="email" type="email" value={this.state.email} onChange={this.handleChange} placeholder="name@example.com" />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label htmlFor="message">Message</Form.Label>
                            <Form.Control id="message" name="message" as="textarea" rows={3} value={this.state.message} onChange={this.handleChange} placeholder="Type message" />
                        </Form.Group>

                        <Button className="d-inline-block" type="submit" disabled={this.state.disabled}>Send</Button>

                        {this.state.emailSent === true && <p className="d-inline success-msg">Email Sent</p>}

                        {this.state.emailSent === false && <p className="d-inline err-msg">Email Not Sent</p>}

                    </Form>
                </Content>
                <Jumbotron className="contact-jumbotron">
                    <Row>
                        <Col className="d-flex justify-content-center flex-wrap">
                            <div className="m-2">
                                <a href="patilmayuri1999@gmail.com" target="_blank" rel="noopener noreferrer">
                                    <Button variant="outline-danger" title="patilmayuri1999@gmail.com">
                                        <i className="fas fa-envelope-square"></i> Email Me
                                    </Button>
                                </a>
                            </div>
                            <div className="m-2">
                                <a href="https://www.linkedin.com/in/mayuri-patil-977a07197/" target="_blank" rel="noopener noreferrer">
                                    <Button variant="outline-primary" title="Visit my LinkenIn">
                                        <i className="fab fa-linkedin"></i> LinkedIn
                                    </Button>
                                </a>
                            </div>
                            <div className="m-2">
                                <a href="https://www.instagram.com/ma_yuri7/" target="_blank" rel="noopener noreferrer">
                                    <Button variant="outline-primary" title="Say hello on FB">
                                        <i className="fab fa-facebook-square"></i> Instagram
                                     </Button>
                                </a>
                            </div>
                            <div className="m-2">
                                <a href="https://github.com/mayuri487" target="_blank" rel="noopener noreferrer">
                                    <Button variant="outline-dark" title="My other projects">
                                        <i className="fab fa-github-square"></i> GitHub
                                    </Button>
                                </a>
                            </div>

                        </Col>
                    </Row>
                </Jumbotron>
            </div>
        );
    }
}

export default ContactPage;