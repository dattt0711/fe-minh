import React, { useEffect, useState } from 'react'
import Footer from '../Home/components/Footer'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import './styles.css'
import ProductImage from '../../images/product.png';
import Button from 'react-bootstrap/Button';
import {
    fetchListCartsApi,
} from '../../api/cartsAPI';
import {
    fetchPaymentApi,
} from '../../api/ordersAPI';
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
                    <Col sm={6}>
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
                            <h3 className="black-color">Shipping address</h3>
                            <Row>
                                <Col sm={6}>
                                    <Form.Group className="mb-3 black-color" controlId="formBasicEmail">
                                        <Form.Label>Country</Form.Label>
                                        <Form.Control type="text" placeholder="Enter country"
                                            name="country"
                                            onChange={(event) => handleOnChange(event)}
                                            value={params?.country}
                                        />
                                    </Form.Group>
                                </Col>
                                <Col sm={6}>
                                    <Form.Group className="mb-3 black-color" controlId="formBasicEmail">
                                        <Form.Label>City</Form.Label>
                                        <Form.Control type="text" placeholder="Enter city"
                                            name="city"
                                            onChange={(event) => handleOnChange(event)}
                                            value={params?.city}
                                        />
                                    </Form.Group>
                                </Col>
                                <Col sm={6}>
                                    <Form.Group className="mb-3 black-color" controlId="formBasicEmail">
                                        <Form.Label>District</Form.Label>
                                        <Form.Control type="text" placeholder="Enter district"
                                            name="district"
                                            onChange={(event) => handleOnChange(event)}
                                            value={params?.district}
                                        />
                                    </Form.Group>
                                </Col>
                                <Col sm={6}>
                                </Col>
                            </Row>
                        </Container>
                    </Col>
                    <Col sm={6}>
                        <div>
                            <h3 className="black-color mb-4">YOUR ORDER</h3>
                            {listProducts.map((pro, index) => {
                                return (
                                    <Container className="order-item pt-3 pb-3" key={index}>
                                        <Row>
                                            <Col sm={3}>
                                                <div className="order-image-product d-flex justify-content-center align-items-center p-3">
                                                    <img src={pro?.productObjId?.image} alt="" />
                                                </div>
                                            </Col>
                                            <Col sm={9}>
                                                <h4 className="black-color">{pro?.productObjId?.productName}</h4>
                                                <div className="d-flex justify-content-between black-color">
                                                    <span>Price</span>
                                                    <span>$ {pro?.productObjId?.price}</span>
                                                </div>
                                                <p className="black-color">Quantity: {pro?.quantity}</p>
                                            </Col>
                                        </Row>
                                    </Container>
                                )
                            })}
                            {/* <Container className="total-price py-2">
                                <Row className="black-color">
                                    <Col sm={6}>
                                        Shipping
                                    </Col>
                                    <Col sm={6} className="text-end">
                                        $5.00
                                    </Col>
                                    <Col sm={6}>
                                        Subtotal
                                    </Col>
                                    <Col sm={6} className="text-end">
                                        $119.96
                                    </Col>
                                </Row>
                            </Container> */}
                            <Container>
                                <Row className="black-color">
                                    <Col sm={6} className="fw-bold">
                                        TOTAL
                                    </Col>
                                    <Col sm={6} className="fw-bold text-end">
                                        ${totalPrice}
                                    </Col>
                                </Row>
                            </Container>
                        </div>
                    </Col>
                    <Col sm={6}>
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