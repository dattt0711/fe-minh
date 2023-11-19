import React, { useEffect, useState } from 'react'
import Footer from '../Home/components/Footer'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import './styles.css'
import QRImage from '../../images/qr.jpg';
import Button from 'react-bootstrap/Button';
import {
    fetchListCartsApi,
} from '../../api/cartsAPI';
import {
    fetchPaymentApi,
} from '../../api/ordersAPI';
import { Image } from 'react-bootstrap';
const initParams = {
    fullName: '',
    email: '',
    phone: '',
    country: '',
    city: '',
    district: '',
}
function Cart() {
    const [listProducts, setListProducts] = useState([]);
    const [params, setParams] = useState(initParams);
    const [reset, setReset] = useState(false);
    const [totalPrice, setTotalPrice] = useState(0);
    const handleOnChange = (event) => {
        setParams({
            ...params,
            [event.target.name]: event.target.value,
        })
    }
    const handleSubmit = async () => {
        const userInfo = JSON.parse(localStorage.getItem("USERS"));
        const userObjId = userInfo?._id;
        if (userObjId && listProducts) {
            const productObjIds = listProducts.map((product) => {
                return {
                    productObjId: product?.productObjId?._id,
                    quantity: product?.quantity,
                }
            })
            const totalPrice = listProducts.reduce((prev, curr) => {
                prev = prev + +curr?.productObjId?.price * +curr?.quantity;
                return prev;
            }, 0)
            await fetchPaymentApi({
                ...params,
                productObjIds: productObjIds,
                userObjId: userObjId,
                totalPrice: totalPrice,
            })
            setReset((prev) => !prev);
            setParams(initParams);
        }

    }
    useEffect(() => {
        async function fetchAPI() {
            const userInfo = JSON.parse(localStorage.getItem("USERS"));
            const userObjId = userInfo?._id;
            if (userObjId) {
                const result = await fetchListCartsApi({
                    userObjId: userObjId,
                })
                if (result?.data?.success) {
                    setListProducts(result.data.data.productObjIds);
                }
            }
        }
        fetchAPI();
    }, [reset])
    useEffect(() => {
        if (listProducts?.length > 0) {
            const price = listProducts.reduce((prev, curr) => {
                prev = prev + +curr?.productObjId?.price;
                return prev;
            }, 0)
            setTotalPrice(price);
        }
    }, [listProducts])

    return (
        <div className="cart">
            <Container>
                <Row>
                    <Col sm={12}>
                        <Container>
                            <h3 className="black-color">Contacts</h3>
                            <Row>
                                <Col sm={6}>
                                    <Form.Group className="mb-3 black-color" controlId="formBasicEmail">
                                        <Form.Label>Full Name</Form.Label>
                                        <Form.Control

                                            type="text" placeholder="Enter full name"
                                            name="fullName"
                                            onChange={(event) => handleOnChange(event)}
                                            value={params?.fullName}
                                        />
                                    </Form.Group>
                                </Col>
                                <Col sm={6}>
                                    <Form.Group className="mb-3 black-color" controlId="formBasicEmail">
                                        <Form.Label>E-mail</Form.Label>
                                        <Form.Control
                                            name="email"
                                            onChange={(event) => handleOnChange(event)}
                                            value={params?.email}
                                            type="email" placeholder="Enter email" />
                                    </Form.Group>
                                </Col>
                                <Col sm={6}>
                                    <Form.Group className="mb-3 black-color" controlId="formBasicEmail">
                                        <Form.Label>Phone</Form.Label>
                                        <Form.Control
                                            name="phone"
                                            onChange={(event) => handleOnChange(event)}
                                            value={params?.phone}
                                            type="phone"
                                            placeholder="Enter phone" />
                                    </Form.Group>
                                </Col>
                            </Row>
                        </Container>
                        <Container className="mt-3">
                            <h3 className="black-color">Booking information</h3>
                            <Row>
                                <Col sm={6}>
                                    <Form.Group className="mb-3 black-color" controlId="formBasicEmail">
                                        <Form.Label>Booking date</Form.Label>
                                        <Form.Control type="date" placeholder="Enter country"
                                            name="country"
                                            onChange={(event) => handleOnChange(event)}
                                            value={params?.country}
                                        />
                                    </Form.Group>
                                </Col>
                                <Col sm={6}>
                                    <Form.Group className="mb-3 black-color" controlId="formBasicEmail">
                                        <Form.Label>Stadiums</Form.Label>
                                        <Form.Control type="text" placeholder="Stadium name"
                                        // name="country"
                                        // value={params?.country}
                                        />
                                    </Form.Group>
                                </Col>
                                <Col sm={12} className="text-center mt-3">
                                    <Image className="qr-image" src={QRImage} rounded />
                                </Col>
                            </Row>
                        </Container>
                    </Col>
                    <Col sm={12}>
                        <div className="d-grid gap-2 mt-4">
                            <Button className="btn-payment" variant="secondary" onClick={handleSubmit}>Complete Payment</Button>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Footer />
        </div>
    )
}

export default Cart