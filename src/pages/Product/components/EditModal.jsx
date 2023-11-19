import * as React from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Form, Container, Row, Col } from 'react-bootstrap';
export default function EditModal(props) {
    const { show, handleCloseModal, handleSubmit, handleOnChange,
        params } = props;

    return (
        <Modal show={show} onHide={handleCloseModal}>
            <Modal.Header closeButton>
                <Modal.Title>Edit stadium</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Container>
                    <Row>
                        <Col sm={12}>
                            <Form>
                                <Form.Group className="mb-3" >
                                    <Form.Label>Image url</Form.Label>
                                    <Form.Control
                                        value={params?.image}
                                        onChange={(event) => handleOnChange(event)}
                                        type="text"
                                        placeholder="Enter image url"
                                        name="image"
                                    />
                                </Form.Group>
                            </Form>
                        </Col>
                        <Col sm={12}>
                            <Form>
                                <Form.Group className="mb-3" >
                                    <Form.Label>Stadium name</Form.Label>
                                    <Form.Control
                                        value={params?.name}
                                        onChange={(event) => handleOnChange(event)}
                                        type="text"
                                        placeholder="Enter stadium name"
                                        name="name"
                                    />
                                </Form.Group>
                            </Form>
                            <Form>
                                <Form.Group className="mb-3" >
                                    <Form.Label>Address</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter Address"
                                        name="address"
                                        value={params?.address}
                                        onChange={(event) => handleOnChange(event)}
                                    />
                                </Form.Group>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" className="btn-pri" onClick={handleCloseModal}>
                    Close
                </Button>
                <Button variant="primary" className="btn-bold" onClick={handleSubmit}>
                    Save
                </Button>
            </Modal.Footer>
        </Modal>
    )
}
