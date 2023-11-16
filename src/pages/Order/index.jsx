import React, { useEffect, useState } from 'react'
import Footer from '../Home/components/Footer'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import './styles.css'
import ProductImage from '../../images/product.png';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import VisibilityIcon from '@mui/icons-material/Visibility';
import {
    fetchListOrderApi,
} from '../../api/ordersAPI';
import Modal from 'react-bootstrap/Modal';
const initParams = {
    fullName: '',
    email: '',
    phone: '',
    country: '',
    city: '',
    district: '',
}
function Order() {
    const [listOrders, setListOrders] = useState([]);
    const [reset, setReset] = useState(false);
    const [show, setShow] = useState(false);
    const [products, setProducts] = useState([]);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleOpen = (orderId) => {
        setShow(true);
        const findOrder = listOrders.find(item => item?._id?.toString() === orderId?.toString());
        setProducts(findOrder?.productObjIds);
    };
    useEffect(() => {
        async function fetchAPI() {
            const userInfo = JSON.parse(localStorage.getItem("USERS"));
            const userObjId = userInfo?._id;
            if (userObjId) {
                const result = await fetchListOrderApi({
                })
                if (result?.data?.success) {
                    setListOrders(result.data.data);
                }
            }
        }
        fetchAPI();
    }, [reset])
    return (
        <div className="order-container" >
            <Container >
                <h2 className="black-color">Order management</h2>
                <Table striped bordered hover className="mt-5">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Country</th>
                            <th>City</th>
                            <th>District</th>
                            <th>Phone number</th>
                            <th>Receiver name</th>
                            <th>Order date</th>
                            <th>Total price</th>
                            <th>Function</th>
                        </tr>
                    </thead>
                    <tbody>
                        {listOrders.map((data, index) => {
                            return (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{data?.country}</td>
                                    <td>{data?.city}</td>
                                    <td>{data?.district}</td>
                                    <td>{data?.phoneNumber}</td>
                                    <td>{data?.receiverName}</td>
                                    <td>{data?.createdAt}</td>
                                    <td>{data?.totalPrice}</td>
                                    <td className="text-center">
                                        <Button className="btn-pri" onClick={() => handleOpen(data?._id)}>
                                            <VisibilityIcon />
                                        </Button>
                                    </td>

                                </tr>
                            )
                        })}
                    </tbody>
                </Table>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Product name</th>
                                    <th>Quantity</th>
                                    <th>Unit Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                {products.map((pro, index) => (
                                    <tr key={pro?._id}>
                                        <td>{index + 1}</td>
                                        <td>{pro?.productObjId?.productName}</td>
                                        <td>{pro?.quantity}</td>
                                        <td>{pro?.productObjId?.price}</td>
                                    </tr>

                                ))}
                            </tbody>
                        </Table>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button className="btn-bold" onClick={handleClose}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            </Container>
        </div >

    )
}

export default Order;