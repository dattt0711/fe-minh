import React, { useState, useEffect } from 'react'
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
import { Link, useNavigate } from 'react-router-dom';
function UserInfo() {
    const [isAdmin, setIsAdmin] = useState(false);
    const [dataInfo, setDataInfo] = useState({});
    const navigate = useNavigate();
    useEffect(() => {
        const userInfo = JSON.parse(localStorage.getItem("USERS"));
        const isAdminCheck = userInfo?.isAdmin;
        if (isAdminCheck) setIsAdmin(true);
        setDataInfo(userInfo);
    }, [])
    const handleLogout = () => {
        localStorage.clear();
        navigate('/login')
    }
    return (
        <div>
            <Container className="user-info black-color">
                <Row>
                    <Col sm={4}>
                        <div className="avatar d-flex align-items-center black-color">
                            <img src="https://i.bloganchoi.com/bloganchoi.com/wp-content/uploads/2020/08/blackpink-jisoo-phim-moi-696x859.jpg?fit=700%2C20000&quality=95&ssl=1" alt="" />
                            <div className="ms-3">
                                <p className="my-0">Anna</p>
                                <p className="my-0">Karenina</p>
                            </div>
                        </div>
                        <div className="black-color border-bottom ps-2 pb-2 mt-5">
                            <PersonOutlineIcon className="me-2" />
                            <span>PERSONAL INFO</span>
                        </div>
                        <div className="black-color border-bottom ps-2 pb-2 mt-3">
                            <Link to="/cart" className="text-dark" style={{ textDecoration: 'none' }}>
                                <ShoppingCartIcon className="me-2" />
                                <span>MY CART</span>
                            </Link>
                        </div>
                        {isAdmin && <div className="black-color border-bottom ps-2 pb-2 mt-3">
                            <Link to="/order" className="text-dark" style={{ textDecoration: 'none' }}>
                                <EventNoteIcon className="me-2" />
                                <span>MY ORDER</span>
                            </Link>
                        </div>}
                        <div className="black-color border-bottom ps-2 pb-2 mt-3">
                            <Link to="/product" className="text-dark" style={{ textDecoration: 'none' }}>
                                <FavoriteBorderIcon className="me-2" />
                                <span>FAVOURITES</span>
                            </Link>
                        </div>
                        <div className="black-color border-bottom ps-2 pb-2 mt-3" onClick={handleLogout}>
                            <LogoutIcon className="me-2" />
                            <span>LOG OUT</span>
                        </div>
                    </Col>
                    <Col sm={2}></Col>
                    <Col sm={6}>
                        <div>
                            {console.log(dataInfo, 'dataInfo')}
                            <h3 className="mb-4">Personal information</h3>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Username</Form.Label>
                                <Form.Control type="text" value={dataInfo?.username} placeholder='Username' />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Date of birth</Form.Label>
                                <Form.Control type="date" placeholder="25/10/1990" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>E-mail</Form.Label>
                                <Form.Control type="text" value={dataInfo?.email} placeholder={dataInfo?.email} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Phone</Form.Label>
                                <Form.Control type="number" placeholder="0123456789" />
                            </Form.Group>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Footer />
        </div>

    )
}

export default UserInfo;