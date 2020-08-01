import React from 'react';
import Carousel from "react-bootstrap/Carousel";


class MyCarousal extends React.Component {
    render() {
      return (
        <div id="home">
          <Carousel controls={false} indicators interval={2500} pauseOnHover={false}>
            <Carousel.Item>
              <img className="d-block w-100 custom-img" src='https://raw.githubusercontent.com/akjha96/ReactifolioBs4_Akj/master/src/assets/img/carousal/slide1.webp' alt="First slide" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100 custom-img" src='https://images.pexels.com/photos/943096/pexels-photo-943096.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260' alt="Third slide" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100 custom-img" src='https://images.pexels.com/photos/92905/pexels-photo-92905.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260' alt="Third slide" />
            </Carousel.Item>
            
          </Carousel>
        </div>
    
      );
    }
  }
  
  export default MyCarousal;