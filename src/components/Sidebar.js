import React from 'react';
import * as B from 'reactstrap';
import { Link } from 'react-router-dom';

export default class Sidebar extends React.Component {
    render() {
        return (
            <div>
                { this.props.sidebarOpen &&
                    <B.Row className="mySidebar">
                        <B.Col xs={12}>
                            <Link to="/">Home</Link>
                            <Link to="/about">About</Link>
                            <Link to="/portfolio">Portfolio</Link>
                            <Link to="/contact">Contact</Link>
                        </B.Col>
                    </B.Row>
                }
            </div>
        );
    }
}