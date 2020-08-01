import React from 'react';

import CardInfo from './CardInfo';
import { Card, Container, Row, Col } from 'react-bootstrap';

const CardCompo = (props) => {
    return (

        // <Container>
        //     <Row>
        //         <React.Fragment>
        //             <Col md="3">
        //                 <Card className="d-inline-block g-card">
        //                 <img className="g-card-image" src={ props.item.imgSrc} alt={ props.item.imgSrc}/>
        //                 {props.item.selected && <CardInfo title={props.item.title} link={props.item.Link}/>}
        //                 </Card>
        //             </Col>
        //         </React.Fragment>
        //         {props.item.selected && <CardInfo title={props.item.title} link={props.item.Link}/>}
        //     </Row>
        // </Container>
        <div className="d-inline-block g-card" onClick={(e) => props.click(props.item)}>
            <img className="g-card-image" src={ props.item.imgSrc} alt={ props.item.imgSrc}/>
            {props.item.selected && <CardInfo title={props.item.title} link={props.item.Link}/>}
        </div>
        
    )
}

export default CardCompo;