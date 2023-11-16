import React, { useState } from 'react'
import Footer from '../Home/components/Footer'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import './styles.css'
import ProductImage from '../../images/product.png';
import Button from 'react-bootstrap/Button';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
// import EditNoteIcon from '@mui/icons-material/EditNote';
import EventNoteIcon from '@mui/icons-material/EventNote';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import LogoutIcon from '@mui/icons-material/Logout';
import Toast from 'react-bootstrap/Toast';

import {
    fetchLogin,
} from '../../api/usersAPI';
import { useNavigate } from 'react-router-dom';

const initialValue = {
    username: '',
    password: '',
}
function Login() {
    const navigate = useNavigate();
    const [show, setShow] = useState(false);
    const [message, setMessage] = useState('');
    const [params, setParams] = useState(initialValue);
    const handleSubmit = async () => {
        const result = await fetchLogin(params);
        if (result?.data?.success) {
            navigate('/');
            localStorage.setItem("USERS", JSON.stringify(result?.data?.data))
        } else {
            setShow(true);
            setMessage(result.data.message);
        }
        setParams(initialValue);
    }

    const handleOnChange = (event) => {
        setParams({
            ...params,
            [event.target.name]: event.target.value,
        })
    }
    return (
        <div className="login-container">
            <div className="login-cover black-color d-flex align-items-center justify-content-center mb-5">
                <div className="d-flex flex-column" style={{ width: '100%' }}>
                    <h3 className="mb-4 text-center">Enter the site</h3>
                    <Toast show={show} onClose={() => setShow(false)}>
                        <Toast.Header>
                            <img
                                src="holder.js/20x20?text=%20"
                                className="rounded me-2"
                                alt=""
                            />
                            <strong className="me-auto">Notification</strong>
                        </Toast.Header>
                        <Toast.Body>{message}</Toast.Body>
                    </Toast>
                    <Container>
                        <Row>
                            <Col sm={3}></Col>
                            <Col sm={6}>
                                <Form.Group className="mb-3" >
                                    <Form.Label>Username</Form.Label>
                                    <Form.Control
                                        name="username"
                                        onChange={(event) => handleOnChange(event)}
                                        type="text" placeholder="Email address" />
                                </Form.Group>
                                <Form.Group className="mb-3" >
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control
                                        name="password"
                                        onChange={(event) => handleOnChange(event)}
                                        type="password" placeholder="Password" />
                                </Form.Group>
                                <div className="d-grid gap-2">
                                    <Button
                                        onClick={handleSubmit}
                                        className="btn-pri"
                                        style={{ width: "100%" }}
                                    >Login</Button>
                                </div>
                                <div className="text-center d-flex flex-column">
                                    <a className="link-login mt-3">Forgot your password?</a>
                                    <a className="link-login mt-3" onClick={() => { navigate('/register') }}>New User Registration</a>
                                </div>
                            </Col>
                            <Col sm={3}></Col>
                        </Row>
                    </Container>

                </div>
            </div>
            <Footer />
        </div>

    )
}

export default Login;