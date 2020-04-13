import React from 'react';
import * as B from 'reactstrap';
import Navbar from './Navbar';
import losAngelesPic from '../images/losAngeles.jpg';
import downloadResume from '../images/resume.pdf';

export default class About extends React.Component {
    render() {
        return (
            <B.Container>
                <Navbar/>
                <B.Row className="aboutPage">
                    <B.Col className="aboutTitle" xs={12}>
                        About
                    </B.Col>
                    <B.Col className="aboutPic" xs={12} md={6}>
                        <img src={losAngelesPic} alt="losAngeles"/>
                    </B.Col>
                    <B.Col className="aboutParagraph" xs={12} md={6}>
                        <p>
                            Hi, I'm Nick.  I live in Los Angeles, California.  I am a developer and absolutely love programming!
                            I am currently pursuing my second bachelors degree in Computer Science at Oregon State University.
                            Previously, I graduated UCLA with a bachelors degree in Psychology.
                        </p>
                        <B.Button href={downloadResume} download="Nicholas_Blackburn_Resume" color="warning">Download Resume!</B.Button>
                    </B.Col>
                </B.Row>
            </B.Container>
        );
    }
}