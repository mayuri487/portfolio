import React from 'react';
//import Carousel from 'react-elastic-carousel';


import CardCompo from './Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import img1 from '../assets/images/img1.png';
import img2 from '../assets/images/img2.png';
import img3 from '../assets/images/img3.png';
import img4 from '../assets/images/img4.png';
import img5 from '../assets/images/img5.png';
import img6 from '../assets/images/img6.png'

class CarouselCompo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: 'Covid-19 Patient Tracker',
                    imgSrc: img5,
                    Link: 'https://github.com/mayuri487/Covid-19-trackerapp',
                    selected: false,
                },
                {
                    id: 1,
                    title: 'Basic Chat App',
                    imgSrc: img2,
                    Link: 'https://github.com/mayuri487/Basic-Chat-App',
                    selected: false,
                },
                {
                    id: 2,
                    title: 'Add-Notes-App',
                    imgSrc: img3,
                    Link: 'https://github.com/mayuri487/keepNotesApp',
                    selected: false,
                },
                {
                    id: 3,
                    title: 'Weather App',
                    imgSrc: img4,
                    Link: 'https://github.com/mayuri487/Weather-App',
                    selected: false,
                },
                {
                    id: 4,
                    title: 'Social Media App(Under development)',
                    imgSrc: img1,
                    Link: 'https://github.com/mayuri487/Social-Media-app',
                    selected: false,
                },
                {
                    id: 5,
                    title: 'Portfolio (React)',
                    imgSrc: img6,
                    Link: 'https://github.com/mayuri487/Social-Media-app',
                    selected: false,
                },
            ]
        }
    }

    handleCardClick = (id, card) => {
        let items = [...this.state.items];
        items[id].selected = items[id].selected ? false : true;

        items.forEach(item => {
            if (item.id != id) {
                item.selected = false;
            }
        });
        this.setState({
            items
        })
    }

    makeItems = (items) => {
        return items.map(item => {
            return <CardCompo item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id} />
        })
    }



    render() {
      
        return (
            <Container fluid={true}>
                <Row className="justify-content-around">
                    { this.makeItems(this.state.items)}
                </Row>
            </Container>
        )
    }
}

export default CarouselCompo;