import React from 'react';
import * as B from 'reactstrap';
import AppModal from './AppModal';
import fitnessPic from '../images/fitness.png';

export default class DigitalFitnessApp extends React.Component {
    render() {
        let fitnessApp = [{
            name: 'DigitalFitness',
            src: fitnessPic,
            text: 'Swift iOS fitness application available on the Apple App Store.',
            link: 'https://itunes.apple.com/us/app/digitalfitness/id1279627866?mt=8'
        }];

        return (
            <B.Row className="myDigitalFitnessApp">
                <B.Col xs={12}>
                    <AppModal name={fitnessApp[0].name} src={fitnessApp[0].src} text={fitnessApp[0].text} link={fitnessApp[0].link}/>
                </B.Col>
            </B.Row>
        );
    }
}