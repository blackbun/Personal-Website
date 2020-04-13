import React from 'react';
import * as B from 'reactstrap';
import Navbar from './Navbar';
import contactImage from '../images/contact.png';

export default class Contact extends React.Component {
    render() {
        return (
            <B.Container>
                <Navbar/>
                <B.Row className="contactPage">
                    <B.Col xs={12}>
                        <B.Row className="contactTitle">
                            <B.Col xs={12}>
                                Contact
                            </B.Col>
                        </B.Row>
                        <B.Row>
                            <B.Col className="contactImage" xs={7}>
                                <img src={contactImage} alt="contact" />
                            </B.Col>
                            <B.Col xs={5}>
                                <B.Row>
                                    <B.Col className="githubButton" xs={12}>
                                        <B.Button color="secondary" size="lg" href="https://github.com/nickBlackburn" target="_blank">
                                            Github
                                        </B.Button>
                                    </B.Col>
                                    <B.Col className="linkedInButton" xs={12}>
                                        <B.Button color="secondary" size="lg" href="https://www.linkedin.com/in/nicholas-blackburn-15852150" target="_blank">
                                            LinkedIn
                                        </B.Button>
                                    </B.Col>
                                </B.Row>
                            </B.Col>
                        </B.Row>
                        <B.Row className="contactEmail">
                            <B.Col xs={12}>
                                Email: nicholast.blackburn@gmail.com
                            </B.Col>
                        </B.Row>
                    </B.Col>
                </B.Row>
            </B.Container>
        );
    }
}