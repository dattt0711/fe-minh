import * as React from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Form, Container, Row, Col } from 'react-bootstrap';
import RatingStar from './RatingStar';
export default function FormModal(props) {
    const { show, handleCloseModal, handleSubmit, handleOnChange,
        createParams, handleRating } = props;
    return (
        <Modal show={show} onHide={handleCloseModal}>
            <Modal.Header closeButton>
                <Modal.Title>Give your review</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Container>
                    <Row>
                        <Col sm={12}>
                            <Form>
                                <Form.Group className="mb-3" >
                                    <Form.Label>Brief intro</Form.Label>
                                    <Form.Control
                                        value={createParams?.brief}
                                        onChange={(event) => handleOnChange(event)}
                                        type="text"
                                        placeholder="Enter brief intro"
                                        name="brief"
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3" >
                                    <Form.Label>Comment</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter comment"
                                        name="comment"
                                        value={createParams?.comment}
                                        onChange={(event) => handleOnChange(event)}
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3" >
                                    <Form.Label>Rating</Form.Label>
                                    <div>
                                        <RatingStar maxRating={5} handleRating={handleRating}
                                            value={createParams?.rating}
                                        />
                                    </div>
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
