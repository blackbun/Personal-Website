import React from 'react';
import * as B from 'reactstrap';
import Navbar from './Navbar';

export default class Portfolio extends React.Component {
    render() {
        return (
            <B.Container>
                <Navbar/>
                <B.Row className="portfolioPage">
                    <B.Col className="portfolioTitle" xs={12}>
                        Portfolio
                    </B.Col>
                    <B.Col className="portfolioApp" xs={12} md={4}>
                        <B.Button className="portfolioButton" color="info" href="https://github.com/nickBlackburn/Fitness-App" target="_blank">
                            DigitalFitness
                        </B.Button>
                    </B.Col>
                    <B.Col className="portfolioApp" xs={12} md={4}>
                        <B.Button className="portfolioButton" color="info" href="https://github.com/nickBlackburn/JumpyPenguin" target="_blank">
                            MrJumpyPenguin
                        </B.Button>
                    </B.Col>
                    <B.Col className="portfolioApp" xs={12} md={4}>
                        <B.Button className="portfolioButton" color="info" href="https://github.com/nickBlackburn/Multi-User-Blog" target="_blank">
                            Multi User Blog
                        </B.Button>
                    </B.Col>
                    <B.Col className="portfolioApp" xs={12} md={4}>
                        <B.Button className="portfolioButton" color="info" href="https://github.com/nickBlackburn/TheConnection" target="_blank">
                            The Connection
                        </B.Button>
                    </B.Col>
                    <B.Col className="portfolioApp" xs={12} md={4}>
                        <B.Button className="portfolioButton" color="info" href="https://github.com/nickBlackburn/Restaurant-Menu" target="_blank">
                            Restaurant Menu
                        </B.Button>
                    </B.Col>
                    <B.Col className="portfolioApp" xs={12} md={4}>
                        <B.Button className="portfolioButton" color="info" href="https://github.com/nickBlackburn/Tournament-Database" target="_blank">
                            Tournament Database
                        </B.Button>
                    </B.Col>
                    <B.Col className="portfolioApp" xs={12} md={4}>
                        <B.Button className="portfolioButton" color="info" href="https://github.com/nickBlackburn/Sewer-Bros" target="_blank">
                            Sewer Bros
                        </B.Button>
                    </B.Col>
                    <B.Col className="portfolioApp" xs={12} md={4}>
                        <B.Button className="portfolioButton" color="info" href="https://github.com/nickBlackburn/SmokeOrFire" target="_blank">
                            Smoke or Fire
                        </B.Button>
                    </B.Col>
                    <B.Col className="portfolioApp" xs={12} md={4}>
                        <B.Button className="portfolioButton" color="info" href="https://github.com/nickBlackburn/FacileInterpreter" target="_blank">
                            Facile Interpreter
                        </B.Button>
                    </B.Col>
                </B.Row>
            </B.Container>
        );
    }
}