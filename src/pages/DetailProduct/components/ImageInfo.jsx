import React, { useState } from 'react';
import ReactImageZoom from 'react-image-zoom';
import '../detailProduct.style.css';
import { useRef, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
function ImageInfo(props) {
  const { dataInfo } = props;
  const [imgShow, setImgShow] = useState(dataInfo?.image);
  useEffect(() => {
    setImgShow(dataInfo?.image);
  }, [dataInfo])
  return (
    <Container >
      <Row className="d-flex align-items-center">
        <Col sm={2}>
          <div className="d-flex flex-column align-items-center justify-content-center">
            <img onClick={() => setImgShow(dataInfo?.subImage1)} style={{ width: '80px', height: '70px', border: '1px solid gray' }} src={dataInfo?.subImage1} alt='#' />
            <img onClick={() => setImgShow(dataInfo?.subImage2)} style={{ width: '80px', height: '70px', border: '1px solid gray', margin: '0 20px' }} src={dataInfo?.subImage2} alt='#' />
            <img onClick={() => setImgShow(dataInfo?.subImage3)} style={{ width: '80px', height: '70px', border: '1px solid gray' }} src={dataInfo?.subImage3} alt='#' />
            <img onClick={() => setImgShow(dataInfo?.image)} style={{ width: '80px', height: '70px', border: '1px solid gray' }} src={dataInfo?.image} alt='#' />
          </div>
        </Col>
        <Col sm={8}>
          <img style={{ width: '100%' }} src={imgShow} alt='#' />
        </Col>
      </Row>
    </Container>
  )
}

export default ImageInfo