import React, { useEffect, useState } from 'react'
import Footer from '../Home/components/Footer'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import './styles.css'
import QRImage from '../../images/qr.jpg';
import Button from 'react-bootstrap/Button';
import { Image } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { fetchInfoStadiumApi, fetchPaymentApi } from '../../api/stadiumsAPI';
const initParams = {
    bookingDate: '',
    phone: '',
}
const initUserInfo = {
    email: '',
    name: '',
}
const initStadiumInfo = {
    stadiumName: '',
}
function Cart() {
    const [listProducts, setListProducts] = useState([]);
    const [params, setParams] = useState(initParams);
    const [reset, setReset] = useState(false);
    const [userInfo, setUserInfo] = useState(initUserInfo);
    const [stadiumInfo, setStadiumInfo] = useState(initStadiumInfo);
    const [totalPrice, setTotalPrice] = useState(0);
    const { stadiumObjId } = useParams();

    const handleOnChange = (event) => {
        setParams({
            ...params,
            [event.target.name]: event.target.value,
        })
    }
    const handleSubmit = async () => {
        const userInfo = JSON.parse(localStorage.getItem("USERS"));
        const userObjId = userInfo?._id;
        const paramsSubmit = {
            ...params,
            fullName: userInfo?.username,
            email: userInfo?.email,
            stadiumObjId,
            userObjId,
        }
        const rs = await fetchPaymentApi(paramsSubmit)
        if (rs?.data?.data.success) {
            setParams(initParams);
        }
    }
    useEffect(() => {
        async function fetchAPI() {
            const userInfoStorage = JSON.parse(localStorage.getItem("USERS"));
            setUserInfo({
                name: userInfoStorage?.username,
                email: userInfoStorage?.email,
            })
        }
        fetchAPI();
    }, [reset])
    useEffect(() => {
        async function fetchData() {
            const rs = await fetchInfoStadiumApi(stadiumObjId);
            if (rs?.data?.success) {
                setStadiumInfo({
                    stadiumName: rs.data.data.name,
                })
            }
        }
        fetchData();
    }, [stadiumObjId, reset])
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
                                            disabled
                                            value={userInfo?.name}
                                            onChange={(event) => handleOnChange(event)}
                                        />
                                    </Form.Group>
                                </Col>
                                <Col sm={6}>
                                    <Form.Group className="mb-3 black-color" controlId="formBasicEmail">
                                        <Form.Label>E-mail</Form.Label>
                                        <Form.Control
                                            name="email"
                                            onChange={(event) => handleOnChange(event)}
                                            disabled
                                            value={userInfo?.email}
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
                                            name="bookingDate"
                                            onChange={(event) => handleOnChange(event)}
                                            value={params?.bookingDate}
                                        />
                                    </Form.Group>
                                </Col>
                                <Col sm={6}>
                                    <Form.Group className="mb-3 black-color" controlId="formBasicEmail">
                                        <Form.Label>Stadiums</Form.Label>
                                        <Form.Control type="text" placeholder="Stadium name"
                                            disabled
                                            value={stadiumInfo?.stadiumName}
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