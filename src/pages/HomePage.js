import React from 'react';
import Helmet from 'react-helmet';

import MyCarousel from '../components/CarouselComponent';
import MyTitle from '../components/TitleMessage'

const HomePage = () => {
   return(
   
      <div>
         <Helmet>
                <style>{'body { background-color: powderblue; }'}</style>
            </Helmet>
          <MyCarousel/>
         <MyTitle/>
        
      </div>
   )
    
}

export default HomePage;