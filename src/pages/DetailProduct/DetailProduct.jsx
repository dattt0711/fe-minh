import React from 'react';
import './detailProduct.style.css';
import { Button, Container } from 'react-bootstrap';
import DetailInfo from './components/DetailInfo';
import ImageInfo from './components/ImageInfo';
import FormModal from './components/FormModal';
import Footer from '../Home/components/Footer';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Review from './components/Review';
import CardComponent from '../Product/components/CardComponent'
import {
  fetchInfoProductApi, fetchRelatedListProductsApi,
} from '../../api/productsAPI';
import {
  fetchAddToCart,
} from '../../api/cartsAPI';
import {
  fetchCreateComment, fetchListCommentsApi,
} from '../../api/commentsAPI';
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from 'react'
const initialValue = {
  productName: 'OAT ESSENTIAL WATER',
  description: 'UPTOWN LIIZ presents the Oat Enough Essential Water. Experience a healthy glow with the Oat Enough routine that contains the rich moisture and nutrition of oats',
  category: '',
  price: '49.98',
  image: 'https://bizweb.dktcdn.net/thumb/grande/100/369/704/products/3-ada177ab-e8ae-46f5-8ee9-19e30da4d7ed.jpg?v=1575349214200',
  details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  subImage1: 'https://bizweb.dktcdn.net/thumb/grande/100/369/704/products/3-ada177ab-e8ae-46f5-8ee9-19e30da4d7ed.jpg?v=1575349214200',
  subImage2: 'https://bizweb.dktcdn.net/thumb/grande/100/369/704/products/3-ada177ab-e8ae-46f5-8ee9-19e30da4d7ed.jpg?v=1575349214200',
  subImage3: 'https://bizweb.dktcdn.net/thumb/grande/100/369/704/products/3-ada177ab-e8ae-46f5-8ee9-19e30da4d7ed.jpg?v=1575349214200',
}
const initParams = {
  productObjId: '',
  comment: '',
  brief: '',
  rating: 1,
}
function DetailProduct() {
  const { id } = useParams();
  const [dataInfo, setDataInfo] = useState(initialValue);
  const [relatedList, setRelatedList] = useState([]);
  const [show, setShow] = useState(false);
  const [createParams, setCreateParams] = useState(initParams);
  const [reset, setReset] = useState(false);
  const [comments, setComments] = useState([]);
  const [quantity, setQuantity] = useState(1);
  //handle change quantity
  const handleChangeQuantity = (type) => {
    if (type === "plus") setQuantity(prev => prev + 1);
    if (type === "minus") {
      if (quantity > 1) {
        setQuantity(prev => prev - 1);
      }
    }
  }

  const handleAddToCart = async (productObjId) => {
    const userInfo = JSON.parse(localStorage.getItem("USERS"));
    const userObjId = userInfo?._id;
    if (userObjId) {
      await fetchAddToCart({
        userObjId: userObjId,
        productObjIds: [{
          productObjId: productObjId,
          quantity: quantity,
        }]
      });
      setQuantity(1);
    }
  }
  //create
  const handleCloseModal = () => {
    setCreateParams(initParams);
    setShow(false);
  }
  const handleSubmit = async () => {
    await fetchCreateComment({
      ...createParams,
      productObjId: id,
    })
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
  const handleRating = (value) => {
    setCreateParams({
      ...createParams,
      rating: value,
    })
  }
  useEffect(() => {
    if (dataInfo?.category) {
      async function fetchData() {
        const rs = await fetchRelatedListProductsApi({
          category: dataInfo.category,
        });
        if (rs?.data?.success) {
          setRelatedList(rs.data.data.items);
        }
      }
      fetchData();
    }
  }, [dataInfo])
  useEffect(() => {
    async function fetchComment() {
      const rs = await fetchListCommentsApi({
        productObjId: id,
      });
      if (rs?.data?.success) {
        setComments(rs.data.data);
      }
    }
    fetchComment();
  }, [id, reset])
  useEffect(() => {
    async function fetchData() {
      const rs = await fetchInfoProductApi(id);
      if (rs?.data?.success) {
        setDataInfo(rs.data.data);
      }
    }
    fetchData();
  }, [id, reset])
  return (
    <div className='detail-product'>
      <Container >
        <Row>
          <Col sm={6}>
            <ImageInfo dataInfo={dataInfo} />
          </Col>
          <Col sm={6}>
            <DetailInfo
              handleChangeQuantity={handleChangeQuantity}
              quantity={quantity}
              dataInfo={dataInfo}
              handleAddToCart={handleAddToCart}
            />
          </Col>
        </Row>
        <div className="mt-5">
          <div className="d-flex justify-content-between">
            <h3 className="black-color">REVIEWS</h3>
            <Button className="btn-bold" onClick={handleOpenModal}>Review</Button>
          </div>
          {comments.map((cmt, index) => (<Review data={cmt} key={index} />))}
        </div>
        <Container fluid className="related-product p-3 mt-5">
          <Container>
            <Row className="mb-4">
              <h3 className="black-color">You may also like</h3>
              <Container>
                <Row>
                  {relatedList.map((item, index) => {
                    return <Col sm={3} key={index}>
                      <CardComponent dataItem={item} isShowBtn={false} />
                    </Col>
                  })}
                </Row>
              </Container>
            </Row>
          </Container>
        </Container>
      </Container>
      <Footer />
      <FormModal
        show={show}
        createParams={createParams}
        handleCloseModal={handleCloseModal}
        handleSubmit={handleSubmit}
        handleOnChange={handleOnChange}
        handleRating={handleRating}
      />
    </div>
  )
}

export default DetailProduct