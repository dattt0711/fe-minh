import { Divider } from '@mui/material'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Footer from '../Home/components/Footer'
import FilterByPrice from './components/FilterByPrice'
import Main from './components/Main'
import MenuList from './components/MenuList'
import './product.style.css'
import { useState } from 'react';
import CardComponent from './components/CardComponent'
import { dataSample } from './data'
import { useEffect } from 'react'
import Form from 'react-bootstrap/Form';
import FormModal from './components/FormModal'
import {
  fetchCreateProduct, fetchDeleteProductApi, fetchListProductsApi, fetchRelatedListProductsApi,
  fetchInfoProductApi, fetchEditProduct,
} from '../../api/productsAPI';
import {
  fetchAddToCart,
} from '../../api/cartsAPI';
import EditModal from './components/EditModal'
const initFilters = {
  search: '',
  sort: '',
}
const initialValue = {
  productName: '',
  description: '',
  category: '',
  price: '',
  image: '',
  details: '',
  subImage1: '',
  subImage2: '',
  subImage3: '',
}
const initialEditValue = {
  productName: '',
  description: '',
  category: '',
  price: '',
  image: '',
  details: '',
  subImage1: '',
  subImage2: '',
  subImage3: '',
  productObjId: '',
}
function Product() {
  const [show, setShow] = useState(false);
  const [oatList, setOatList] = useState([]);
  const [ampouleList, setAmpouleList] = useState([]);
  const [relatedList, setRelatedList] = useState([]);
  const [filters, setFilters] = useState(initFilters);
  const [createParams, setCreateParams] = useState(initialValue);
  const [editParams, setEditParams] = useState(initialValue);
  const [showEdit, setShowEdit] = useState(false);
  const [reset, setReset] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  useEffect(() => {
    async function fetchData() {
      const result = await fetchListProductsApi(
        filters,
      );
      if (result?.data?.success) {
        setOatList(result?.data?.data.filter(pro => pro.category === 'Oat Collection'));
        setAmpouleList(result?.data?.data.filter(pro => pro.category === 'Ampoule Collection'));
      }
    }
    fetchData();
    const userInfo = JSON.parse(localStorage.getItem("USERS"));
    const isAdminCheck = userInfo?.isAdmin;
    console.log(isAdminCheck, 'isAdminCheck')
    console.log(userInfo?.isAdmin, 'userInfo?.isAdmin')
    if (isAdminCheck) setIsAdmin(true);
  }, [filters, reset])
  console.log('isAdmin', isAdmin)
  useEffect(() => {
    async function fetchData() {
      const result = await fetchRelatedListProductsApi({});
      if (result?.data?.success) {
        setRelatedList(result?.data?.data?.items);
      }
    }
    fetchData();
  }, [reset])
  //create
  const handleCloseModal = () => {
    setCreateParams(initialValue);
    setShow(false);
  }
  const handleSubmit = async () => {
    await fetchCreateProduct(createParams);
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
    setEditParams(initialEditValue);
    setShowEdit(false);
  }
  const handleSubmitEdit = async () => {
    await fetchEditProduct(editParams);
    setReset((prev) => !prev);
    setShowEdit(false);
    setEditParams(initialEditValue);
  }
  const handleOpenEditModal = async (productObjId) => {
    const result = await fetchInfoProductApi(productObjId)
    if (result?.data?.success) {
      setEditParams({
        ...result.data.data,
        productObjId: productObjId,
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
  const handleDelete = async (productObjId) => {
    await fetchDeleteProductApi({ productObjId });
    setReset((prev) => !prev);
  }
  // handle Add to Cart
  const handleAddToCart = async (productObjId, qty) => {
    const userInfo = JSON.parse(localStorage.getItem("USERS"));
    const userObjId = userInfo?._id;
    if (userObjId) {
      await fetchAddToCart({
        userObjId: userObjId,
        productObjIds: [{
          productObjId: productObjId,
          quantity: qty,
        }]
      });
    }
  }
  return (
    <div className='product primary-background'>
      <Container>
        <Row className="mb-4">
          <Col sm={5}>
            <h3 className="black-color">OAT COLLECTION</h3>
          </Col>
          <Col sm={5}>
            <Form.Select
              onChange={(event) => setFilters({
                ...filters,
                sort: event.target.value,
              })}
              aria-label="Default select example">
              <option
              >Sort by
              </option>
              <option value="1">Sort price - High to Low</option>
              <option value="2">Sort price - Low to high</option>
            </Form.Select>
          </Col>
          <Col sm={2}>
            <div className="text-end">
              {isAdmin && <button className="btn-bold" onClick={() => handleOpenModal()}>Create</button>}
            </div>
          </Col>
          <Container>
            <Row>
              {oatList.map((dataItem, index) => {
                return <Col sm={3} key={index} className="mt-4">
                  <CardComponent
                    isAdmin={isAdmin}
                    handleAddToCart={handleAddToCart}
                    handleOpenEditModal={handleOpenEditModal}
                    dataItem={dataItem}
                    handleDelete={handleDelete}
                  />
                </Col>
              })}
            </Row>
          </Container>
        </Row>
        <Row className="mb-4 mt-5">
          <h3 className="black-color">MORE DEEP AMPOULE COLLECTION</h3>
          <Container>
            <Row>
              {ampouleList.map((dataItem, index) => {
                return <Col sm={3} key={index} className="mt-4">
                  <CardComponent
                    isAdmin={isAdmin}
                    handleOpenEditModal={handleOpenEditModal}
                    handleAddToCart={handleAddToCart}
                    dataItem={dataItem}
                    handleDelete={handleDelete}
                  />
                </Col>
              })}
            </Row>
          </Container>
        </Row>
      </Container>
      <Container fluid className="related-product p-3 mt-5">
        <Container>
          <Row className="mb-4">
            <h3 className="black-color">You may also like</h3>
            <Container>
              <Row>
                {relatedList.map((dataItem, index) => {
                  return <Col sm={3} key={index} className="mt-4">
                    <CardComponent
                      isAdmin={isAdmin}
                      handleAddToCart={handleAddToCart}
                      dataItem={dataItem}
                      handleDelete={handleDelete}
                      handleOpenEditModal={handleOpenEditModal}
                    />
                  </Col>
                })}
              </Row>
            </Container>
          </Row>
        </Container>
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