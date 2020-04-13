import React from 'react';
import * as B from 'reactstrap';

export default class Developer extends React.Component {
    render() {
        return (
            <B.Row className="myDeveloper">
                <B.Col xs={12}>
                    <h2 className="devTitle">Nicholas Blackburn</h2>
                    <h4 className="devWord">Developer</h4>
                </B.Col>
            </B.Row>
        );
    }
}