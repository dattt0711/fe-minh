import * as React from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Form, Container, Row, Col } from 'react-bootstrap';
import RatingStar from '../../DetailProduct/components/RatingStar';
export default function FormModal(props) {
    const { show, handleCloseModal, handleSubmit, handleOnChange,
        createParams } = props;
    return (
        <Modal show={show} onHide={handleCloseModal}>
            <Modal.Header closeButton>
                <Modal.Title>Create a new stadium</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Container>
                    <Row>
                        <Col sm={12}>
                            <Form>
                                <Form.Group className="mb-3" >
                                    <Form.Label>Stadium name</Form.Label>
                                    <Form.Control
                                        value={createParams.productName}
                                        onChange={(event) => handleOnChange(event)}
                                        type="text"
                                        placeholder="Enter stadium name"
                                        name="name"
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3" >
                                    <Form.Label>Address</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter address"
                                        name="address"
                                        value={createParams.address}
                                        onChange={(event) => handleOnChange(event)}
                                    />
                                </Form.Group>
                                {/* <Form.Group className="mb-3" > */}
                                {/* <Form.Label>Category</Form.Label> */}
                                {/* <Form.Select
                                        name="category"
                                        aria-label="Default select example"
                                        value={createParams.category}
                                        onChange={(event) => handleOnChange(event)}
                                    >
                                        <option value="">Open this category menu</option>
                                        <option value="Oat Collection">Oat Collection</option>
                                        <option value="Ampoule Collection">Ampoule Collection</option>
                                    </Form.Select> */}
                                {/* </Form.Group> */}
                                <Form.Group className="mb-3" >
                                    <Form.Label>Image</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter image"
                                        name="image"
                                        value={createParams.details}
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
