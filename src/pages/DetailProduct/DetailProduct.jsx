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
  fetchInfoStadiumApi
} from '../../api/stadiumsAPI';

import {
  fetchCreateComment, fetchListCommentsApi,
} from '../../api/commentsAPI';
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from 'react'
const initialValue = {
  name: 'Old trafford',
  address: 'Old Trafford (/ˈtræfərd/) is a football stadium in Old Trafford, Greater Manchester, England, and the home of Manchester United. With a capacity of 74,310[1] it is the largest club football stadium (and second-largest football stadium overall after Wembley Stadium) in the United Kingdom, and the twelfth-largest in Europe.[3] It is about 0.5 miles (800 m) from Old Trafford Cricket Ground and the adjacent tram stop.',
  image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Manchester_United_Old_Trafford_%28cropped%29.jpg/250px-Manchester_United_Old_Trafford_%28cropped%29.jpg',
}
const initParams = {
  stadiumObjId: '',
  comment: '',
  brief: '',
  rating: 1,
}
function DetailProduct() {
  const { id } = useParams();
  const [dataInfo, setDataInfo] = useState(initialValue);
  const [show, setShow] = useState(false);
  const [createParams, setCreateParams] = useState(initParams);
  const [reset, setReset] = useState(false);
  const [comments, setComments] = useState([]);
  //create
  const handleCloseModal = () => {
    setCreateParams(initParams);
    setShow(false);
  }
  const handleSubmit = async () => {
    await fetchCreateComment({
      ...createParams,
      stadiumObjId: id,
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
    async function fetchComment() {
      const rs = await fetchListCommentsApi({
        stadiumObjId: id,
      });
      if (rs?.data?.success) {
        setComments(rs.data.data);
      }
    }
    fetchComment();
  }, [id, reset])
  useEffect(() => {
    async function fetchData() {
      const rs = await fetchInfoStadiumApi(id);
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
              dataInfo={dataInfo}
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