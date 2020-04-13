import React from 'react';
import * as B from 'reactstrap';

export default class Courses extends React.Component {
    render() {
        const allCourses = this.props.courseList.map((course) =>
            <B.ListGroupItem key={course}>{course}</B.ListGroupItem>
        );

        return (
            <B.Row className="myCourses">
                <B.Col xs={12}>
                    <B.ListGroup>
                        {allCourses}
                    </B.ListGroup>
                </B.Col>
            </B.Row>
        );
    }
}