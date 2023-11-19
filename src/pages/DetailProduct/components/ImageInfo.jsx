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
        <Col sm={8}>
          <img style={{ width: '100%' }} src={imgShow} alt='#' />
        </Col>
      </Row>
    </Container>
  )
}

export default ImageInfo