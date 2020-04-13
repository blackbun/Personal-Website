import React from 'react';
import * as B from 'reactstrap';

export default class AppModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modalOpen: false
        };

        this.toggleModal = this.toggleModal.bind(this);
    }

    toggleModal() {
        this.setState({
            modalOpen: !this.state.modalOpen
        });
    }

    render() {
        return (
            <B.Row>
                <B.Col xs={12}>
                    <B.Button color="success" onClick={this.toggleModal}>{this.props.name}</B.Button>
                    <B.Modal isOpen={this.state.modalOpen} toggle={this.toggleModal} autoFocus={false} fade={false} className="myModal">
                        <B.ModalHeader className="myModalHeader" >{this.props.name}</B.ModalHeader>
                        <B.ModalBody>
                            <B.Row>
                                <B.Col xs={6}>
                                    <img src={this.props.src} alt={this.props.name}/>
                                </B.Col>
                                <B.Col className="myModalText" xs={6}>
                                    {this.props.text}
                                </B.Col>
                            </B.Row>
                            <B.Row className="myModalButtons">
                                <B.Col xs={6}>
                                    <B.Button color="primary" outline href={this.props.link} target="_blank">Go!</B.Button>
                                </B.Col>
                                <B.Col xs={6}>
                                    <B.Button color="danger" className="cancelAppModal" outline onClick={this.toggleModal}>Cancel</B.Button>
                                </B.Col>
                            </B.Row>
                        </B.ModalBody>
                    </B.Modal>
                </B.Col>
            </B.Row>
        );
    }
}