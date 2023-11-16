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
    fetchRegister,
} from '../../api/usersAPI';
import { useNavigate } from 'react-router-dom';
const initialValue = {
    username: '',
    email: '',
    password: '',
}
function Register() {
    const navigate = useNavigate();
    const [show, setShow] = useState(false);
    const [params, setParams] = useState(initialValue);

    const handleSubmit = async () => {
        const result = await fetchRegister(params);
        if (result?.data?.success) {
            navigate('/login');
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
                <div className="d-flex flex-column" style={{ width: "100%" }}>
                    <h3 className="mb-4 text-center">Enter the site</h3>
                    <Toast show={show} onClose={() => setShow(false)}>
                        <Toast.Header>
                            <img
                                src="holder.js/20x20?text=%20"
                                className="rounded me-2"
                                alt=""
                            />
                            <strong className="me-auto">Noti</strong>
                        </Toast.Header>
                        <Toast.Body>Woohoo, you're reading this text in a Toast!</Toast.Body>
                    </Toast>
                    <Container>
                        <Row>
                            <Col sm={3}>

                            </Col>
                            <Col sm={6}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Username</Form.Label>
                                    <Form.Control
                                        name="username"
                                        onChange={(event) => handleOnChange(event)}
                                        type="text"
                                        placeholder="Username"

                                    />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>E-mail address</Form.Label>
                                    <Form.Control type="text" placeholder="Email address"
                                        name="email"
                                        onChange={(event) => handleOnChange(event)}
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="Password"
                                        name="password"
                                        onChange={(event) => handleOnChange(event)}
                                    />
                                </Form.Group>
                                <div className="d-grid gap-2">
                                    <Button
                                        onClick={handleSubmit}
                                        className="mt-3 btn-pri" style={{ width: "100%" }}>Register</Button>
                                </div>
                            </Col>
                            <Col sm={3}>

                            </Col>
                        </Row>

                    </Container>
                </div>
            </div>
            <Footer />
        </div>

    )
}

export default Register;