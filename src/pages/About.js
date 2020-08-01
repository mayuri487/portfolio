import React from 'react';
import Helmet from 'react-helmet';

import Hero from '../components/Hero';
import Content from '../components/Content'

const AboutPage = (props) => {
    return (
        <div>
        <Helmet>
                <style>{'body { background-color: powderblue; }'}</style>
            </Helmet>
            <Hero title={props.title}/>
            <Content>
            <p>Hello, I am Mayuri Patil, born and brought up in Mumbai,India.</p>
            <p>I am a Flutter developer with experience of 5-6 months in flutter app development.</p>
            <p>A final year engineering student with specialization in Electronics. An enthusiastic fresher with highly motivated and programming Skills.</p>
            <p>I am constantly learning new things, currently those things include gaining more experience with react frontend development and Flutter.</p>
            <p>My goal is always driven towards creating amazing UI and providing better user experience.</p>
            </Content>
            
        </div>
    )
}

export default AboutPage;