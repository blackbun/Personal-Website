import React from 'react';
import * as B from 'reactstrap';
import AppModal from './AppModal';
import penguinPic from '../images/penguin.jpg';

export default class MrJumpyPenguinApp extends React.Component {
    render() {
        let penguinApp = [{
            name: 'MrJumpyPenguin',
            src: penguinPic,
            text: 'Fun Swift iOS game available on the Apple App Store.',
            link: 'https://itunes.apple.com/us/app/mrjumpypenguin/id1172546499?mt=8'
        }];

        return (
            <B.Row className="myMrJumpyPenguinApp">
                <B.Col xs={12}>
                    <AppModal name={penguinApp[0].name} src={penguinApp[0].src} text={penguinApp[0].text} link={penguinApp[0].link} />
                </B.Col>
            </B.Row>
        );
    }
}