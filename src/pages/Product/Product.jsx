import React from 'react'
import { Button, Col, Container, Row, Toast } from 'react-bootstrap'
import Footer from '../Home/components/Footer'
import './product.style.css'
import { useState } from 'react';
import CardComponent from './components/CardComponent'
import { dataSample } from './data'
import { useEffect } from 'react'
import Form from 'react-bootstrap/Form';
import FormModal from './components/FormModal'
import AddIcon from '@mui/icons-material/Add';
import {
  fetchCreateProduct, fetchDeleteProductApi, fetchListProductsApi, fetchRelatedListProductsApi,
  fetchInfoProductApi, fetchEditProduct,
} from '../../api/productsAPI';
import {
  fetchCreateStadium, fetchDeleteStadiumApi, fetchListStadiumsApi, fetchRelatedListStadiumsApi,
  fetchInfoStadiumApi, fetchEditStadium,
} from '../../api/stadiumsAPI';
import {
  fetchAddToCart,
} from '../../api/cartsAPI';
import EditModal from './components/EditModal'
import Pagination from '../../components/Pagination';
import ToastContainer from 'react-bootstrap/ToastContainer';
const initFilters = {
  search: '',
  sort: '',
  page: 1,
}
const initialValue = {
  name: '',
  address: '',
  image: '',
}

function Product() {
  const [show, setShow] = useState(false);
  const [stadiumList, setStadiumList] = useState([]);
  const [filters, setFilters] = useState(initFilters);
  const [createParams, setCreateParams] = useState(initialValue);
  const [editParams, setEditParams] = useState(initialValue);
  const [showEdit, setShowEdit] = useState(false);
  const [reset, setReset] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [message, setMessage] = useState('');
  const [showNoti, setShowNoti] = useState(false);
  const [paginator, setPaginator] = useState({
    pageCount: 1,
    currentPage: 1,
  })
  useEffect(() => {
    async function fetchData() {
      const res = await fetchListStadiumsApi(
        filters,
      );
      const result = await fetchListProductsApi(
        filters,
      );
      if (result?.data?.success) {
        setStadiumList(res?.data?.data.items);
        setPaginator(res?.data?.data.paginator);
      }
    }
    fetchData();
    const userInfo = JSON.parse(localStorage.getItem("USERS"));
    const isAdminCheck = userInfo?.isAdmin;
    if (isAdminCheck) setIsAdmin(true);
  }, [filters, reset])
  //create
  const handleCloseModal = () => {
    setCreateParams(initialValue);
    setShow(false);
  }
  const handleSubmit = async () => {
    await fetchCreateStadium(createParams);
    setReset((prev) => !prev);
    setShow(false);
    setCreateParams(initialValue);
  }
  const handleOpenModal = () => {
    setShow(true);
  }

  const handleOnChange = (event) => {
    setCreateParams({
      ...createParams,
      [event.target.name]: event.target.value,
    })
  }
  // handle edit
  const handleCloseEditModal = () => {
    setEditParams(initialValue);
    setShowEdit(false);
  }
  const handleSubmitEdit = async () => {
    await fetchEditStadium(editParams);
    setReset((prev) => !prev);
    setShowEdit(false);
    setEditParams(initialValue);
  }
  const handleOpenEditModal = async (stadiumObjId) => {
    const result = await fetchInfoStadiumApi(stadiumObjId)
    if (result?.data?.success) {
      setEditParams({
        ...result.data.data,
        stadiumObjId: stadiumObjId,
      })
    }
    setShowEdit(true);
  }
  const handleOnChangeEdit = (event) => {
    setEditParams({
      ...editParams,
      [event.target.name]: event.target.value,
    })
  }

  // delete
  const handleDelete = async (stadiumObjId) => {
    const resDeleted = await fetchDeleteStadiumApi({ stadiumObjId });
    setReset((prev) => !prev);
    if (resDeleted?.data?.success) {
      setShowNoti(true);
      setMessage(resDeleted?.data?.message);
    }
  }

  // Handle search
  const handleSearch = async (event) => {
    setFilters((prev) => {
      return {
        ...prev,
        search: event.target.value
      }
    })
  }
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
    <div className='product primary-background'>
      <ToastContainer position="top-center">
        <Toast className="custom-toast" show={showNoti}
          autohide={true}
          delay={2000}
          onClose={() => setShowNoti(false)}>
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
      </ToastContainer>
      <Container>
        <Row className="mb-4">
          <Col sm={5}>
            <h3 className="black-color">Stadiums Management</h3>
          </Col>
          <Col sm={5}>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                name="search"
                onChange={(event) => handleSearch(event)}
              />
              <Button className="btn-bold" variant="outline-success">Search</Button>
            </Form>
          </Col>
          <Col sm={2}>
            <div className="text-end">
              {isAdmin && <button className="btn-bold" onClick={() => handleOpenModal()}>
                <AddIcon />
              </button>}
            </div>
          </Col>
          <Container>
            <Row>
              {stadiumList.map((dataItem, index) => {
                return <Col sm={4} key={index} className="mt-4">
                  <CardComponent
                    isAdmin={isAdmin}
                    handleOpenEditModal={handleOpenEditModal}
                    dataItem={dataItem}
                    handleDelete={handleDelete}
                  />
                </Col>
              })}
            </Row>
          </Container>
        </Row>
        <Row>
          <Pagination paginator={paginator} handlePage={handlePage} />
        </Row>
      </Container>
      <Footer />
      <FormModal
        show={show}
        handleCloseModal={handleCloseModal}
        handleSubmit={handleSubmit}
        handleOnChange={handleOnChange}
        createParams={createParams}
      />
      <EditModal
        show={showEdit}
        handleCloseModal={handleCloseEditModal}
        handleSubmit={handleSubmitEdit}
        handleOnChange={handleOnChangeEdit}
        params={editParams}
      />
    </div >
  )
}

export default Product