import React from 'react';
import * as B from 'reactstrap';
import Courses from './Courses';
import SchoolInfo from './SchoolInfo';

export default class Ucla extends React.Component {
    render() {
        const uclaCourses = [
            'Social Psychology',
            'Human Motivation Psychology',
            'Fundamentals of Learning',
            'Behavioral Neuroscience',
            'Cognitive Psychology',
            'Mind Body Health',
            'Behavior & Brain Development',
            'Cognitive Development',
            'Childhood & Adolescence',
            'Psychology of Addiction',
            'Abnormal Psychology',
            'Psychology Research Methods',
            'Statistics',
            'Philosophy',
            'Accounting',
            'Economics',
            'Calculus - Integration & Infinite Series',
            'Intro to Computer Science 1'
        ];

        const uclaInfo = [{
            degree: 'Psychology',
            graduation: 'Graduated: 2015',
            gpa: '3.01'
        }];

        return (
            <B.Row className="myUcla">
                <B.Col xs={12}>
                    <B.Row>
                        <B.Col xs={12}>
                            <h2 className="uclaTitle">University of California Los Angeles</h2>
                        </B.Col>
                    </B.Row>
                    <B.Row>
                        <B.Col xs={12} md={6}>
                            <Courses courseList={uclaCourses}/>
                        </B.Col>
                        <B.Col xs={12} md={6}>
                            <SchoolInfo info={uclaInfo}/>
                        </B.Col>
                    </B.Row>
                </B.Col>
            </B.Row>
        );
    }
}