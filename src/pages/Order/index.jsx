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
import PaginationComponent from '../../components/Pagination';

const initFilters = {
  page: 1,
}
function Order() {
    const [listOrders, setListOrders] = useState([]);
    const [reset, setReset] = useState(false);
    const [filters, setFilters] = useState(initFilters);
 
    const [paginator, setPaginator] = useState({
      pageCount: 1,
      currentPage: 1,
    })
    useEffect(() => {
        async function fetchAPI() {
            const userInfo = JSON.parse(localStorage.getItem("USERS"));
            const userObjId = userInfo?._id;
            if (userObjId) {
                const params = {
                  ...filters,
                };
                if(!userInfo?.isAdmin) {
                    params.userObjId = userObjId;
                }
                const result = await fetchListOrderApi(params)
                if (result?.data?.success) {
                    setListOrders(result.data.data.items);
                    setPaginator(result?.data?.data.paginator);
                }
            }
        }
        fetchAPI();
    }, [reset])
     // Handle page
  const handlePage = async (page) => {
    setFilters((prev) => {
      return {
        ...prev,
        page: +page,
      }
    })
  }
    return (
        <div className="order-container" >
            <Container >
                <h2 className="black-color">Booking histories</h2>
                <Table striped bordered hover className="mt-5">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Username</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Booking date</th>
                            <th>Stadium name</th>
                            <th>Stadium price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {listOrders.map((data, index) => {
                            return (
                                <tr key={data._id}>
                                    <td>{index + 1}</td>
                                    <td>{data?.fullName}</td>
                                    <td>{data?.email}</td>
                                    <td>{data?.phone}</td>
                                    <td>{data?.bookingDate}</td>
                                    <td>{data?.stadiumObjId?.name}</td>
                                    <td>{data?.stadiumObjId?.price}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </Table>
                <Row>
          <PaginationComponent paginator={paginator} handlePage={handlePage} />
        </Row>
            </Container>
        </div >

    )
}

export default Order;