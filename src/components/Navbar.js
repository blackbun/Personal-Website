import React from 'react';
import * as B from 'reactstrap';
import logo from '../images/logo.png';
import Sidebar from '../components/Sidebar';
import { Link } from 'react-router-dom';

export default class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sidebarOpen: false
        }
        this.toggleSidebar = this.toggleSidebar.bind(this);
    }

    toggleSidebar() {
        this.setState({
            sidebarOpen: !this.state.sidebarOpen
        });
    }

    render() {
        return (
            <B.Row>
                <B.Col xs={12}>
                    <Sidebar sidebarOpen={this.state.sidebarOpen}/>
                    <B.Navbar className="myNav">
                        <B.Nav navbar>
                            <B.NavItem>
                                <B.NavLink className="myMenuButton" onClick={this.toggleSidebar}>
                                    <i className="fa fa-bars fa-2x"></i>
                                </B.NavLink>
                            </B.NavItem>
                            <B.NavItem>
                                <Link to="/" className="myLogo">
                                    <B.Media object src={logo} alt="logo" />
                                </Link>
                            </B.NavItem>
                        </B.Nav>
                    </B.Navbar>
                </B.Col>
            </B.Row>
        );
    }
}

