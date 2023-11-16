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
                <Modal.Title>Create a new product</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Container>
                    <Row>
                        <Col sm={6}>
                            <Form>
                                <Form.Group className="mb-3" >
                                    <Form.Label>Image url</Form.Label>
                                    <Form.Control
                                        value={createParams.image}
                                        onChange={(event) => handleOnChange(event)}
                                        type="text"
                                        placeholder="Enter image url"
                                        name="image"
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3" >
                                    <Form.Label>Sub image 1</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter url"
                                        name="subImage1"
                                        value={createParams.subImage1}
                                        onChange={(event) => handleOnChange(event)}
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3" >
                                    <Form.Label>Sub image 2</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter url"
                                        name="subImage2"
                                        value={createParams.subImage2}
                                        onChange={(event) => handleOnChange(event)}
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3" >
                                    <Form.Label>Sub image 3</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter url"
                                        name="subImage3"
                                        value={createParams.subImage3}
                                        onChange={(event) => handleOnChange(event)}
                                    />
                                </Form.Group>
                            </Form>
                        </Col>
                        <Col sm={6}>
                            <Form>
                                <Form.Group className="mb-3" >
                                    <Form.Label>Product name</Form.Label>
                                    <Form.Control
                                        value={createParams.productName}
                                        onChange={(event) => handleOnChange(event)}
                                        type="text"
                                        placeholder="Enter product name"
                                        name="productName"
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3" >
                                    <Form.Label>Description</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter description"
                                        name="description"
                                        value={createParams.description}
                                        onChange={(event) => handleOnChange(event)}
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3" >
                                    <Form.Label>Category</Form.Label>
                                    <Form.Select
                                        name="category"
                                        aria-label="Default select example"
                                        value={createParams.category}
                                        onChange={(event) => handleOnChange(event)}
                                    >
                                        <option value="">Open this category menu</option>
                                        <option value="Oat Collection">Oat Collection</option>
                                        <option value="Ampoule Collection">Ampoule Collection</option>
                                    </Form.Select>
                                </Form.Group>
                                <Form.Group className="mb-3" >
                                    <Form.Label>Price</Form.Label>
                                    <Form.Control
                                        type="number"
                                        placeholder="Enter price"
                                        name="price"
                                        value={createParams.price}
                                        onChange={(event) => handleOnChange(event)}
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3" >
                                    <Form.Label>Details</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter details"
                                        name="details"
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
