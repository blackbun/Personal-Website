import React from 'react';
import * as B from 'reactstrap';
import DigitalFitnessApp from './DigitalFitnessApp';
import MrJumpyPenguinApp from './MrJumpyPenguinApp';

export default class MyApps extends React.Component {
    render() {
        return (
            <B.Row className="myApps">
                <B.Col xs={12} lg={6}>
                    <DigitalFitnessApp />
                </B.Col>
                <B.Col xs={12} lg={6}>
                    <MrJumpyPenguinApp />
                </B.Col>
            </B.Row>
        );
    }
}


