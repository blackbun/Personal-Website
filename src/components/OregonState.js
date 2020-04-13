import React from 'react';
import * as B from 'reactstrap';
import Courses from './Courses';
import SchoolInfo from './SchoolInfo';

export default class OregonState extends React.Component {
    render() {
        const oregonStateCourses = [
            'Intro to Computer Science I',
            'Discrete Structures',
            'Intro to Computer Science II',
            'Computer Architecture & Assembly Language',
            'Data Structures (current)',
            'Web Development (current)'
        ];

        const oregonStateInfo = [{
            degree: 'Computer Science',
            graduation: 'Expected Graduation: 2019',
            gpa: '3.57'
        }];

        return (
            <B.Row className="myOregonState">
                <B.Col xs={12}>
                    <B.Row>
                        <B.Col xs={12}>
                            <h2 className="oregonStateTitle">Oregon State University</h2>
                        </B.Col>
                    </B.Row>
                    <B.Row>
                        <B.Col xs={12} md={6}>
                            <Courses courseList={oregonStateCourses}/>
                        </B.Col>
                        <B.Col xs={12} md={6}>
                            <SchoolInfo info={oregonStateInfo}/>
                        </B.Col>
                    </B.Row>
                </B.Col>
            </B.Row>
        );
    }
}