import React from 'react';
import Helmet from 'react-helmet';

import Hero from '../components/Hero';
import Button from 'react-bootstrap/Button';
import CarouselCompo from '../components/Carousel';

const WorkPage = (props) => {

    return (
        <div>
            <Helmet>
                <style>{'body { background-color: powderblue; }'}</style>
            </Helmet>
            <Hero title={props.title} subTitle={props.subTitle} text={props.text} />
            <a href="https://drive.google.com/drive/folders/12tEzB6rHB93lez0ToubomqFiE9m3uNM3" target="_blank" rel="noopener noreferrer">
                <Button variant="outline-primary" title="Visit my work">
                    <i className="fab fa-linkedin"></i> See Demo Videos
                                    </Button>
            </a>
            <CarouselCompo />
        </div>
    );
}

export default WorkPage;