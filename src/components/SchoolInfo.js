import React from 'react';
import * as B from 'reactstrap';

export default class SchoolInfo extends React.Component {
    render() {
        return (
            <B.Row className="mySchoolInfo">
                <B.Col xs={12}>
                    <p>{this.props.info[0].degree}</p>
                    <p>{this.props.info[0].graduation}</p>
                    <p>GPA: {this.props.info[0].gpa}</p>
                </B.Col>
            </B.Row>
        );
    }
}