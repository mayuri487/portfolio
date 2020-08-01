import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'
import Component, { Container } from 'react-bootstrap';

import Footer from './components/Footer';
import WorkPage from './pages/WorkPage';
import AboutPage from './pages/About';
import ContactPage from './pages/ContactPage';
import HomePage from './pages/HomePage';
import ExperienceCard from './pages/ExperiencePage';
import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      title: 'My Portfolio',
      headerLinks: [
        { title: 'Home', path: '/' },
        { title: 'About', path: '/about' },
        { title: 'Contact', path: '/contact' },
      ],
      home: {
        title: 'Checkout my work below',
        text: 'click on images to view more.'
      },
      about: {
        title: 'About Me',
      },
      contact: {
        title: 'Let\'s talk'
      },
      experience: {
        title: 'Experience'
      }
    }
  }
  render() {
    return (
      <BrowserRouter>
        <Container fluid={true}>
          <Navbar className="border-bottom" bg="light" expand="lg">
            <Navbar.Brand>Mayuri Patil</Navbar.Brand>
            <Navbar.Toggle className='border-0' aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ml-auto">
                <Link className="nav-link" to="/">Home</Link>
                <Link className="nav-link" to="/about">About</Link>
                <Link className="nav-link" to="/work">Work</Link>
                <Link className="nav-link" to="/experience">Experience</Link>
                <Link className="nav-link" to="/contact">Contact</Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          <Route exact path='/' render={() => <HomePage title={this.state.home.title} subTitle={this.state.home.subTitle} text={this.state.home.text} />} />
          <Route path='/about' render={() => <AboutPage title={this.state.about.title} />} />
          <Route path='/contact' render={() => <ContactPage title={this.state.contact.title}  />} />
          <Route path='/work' render={() => <WorkPage title={this.state.home.title} text={this.state.home.text} />} />
          <Route path='/experience' render={() => <ExperienceCard title={this.state.experience.title}/>}/>
          <Footer />
        </Container>
      </BrowserRouter>
    );
  }
}

export default App;
