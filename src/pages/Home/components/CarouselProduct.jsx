import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { Container } from 'react-bootstrap';
import './style.css'

const responsive = {
  0: { items: 1 },
  368: { items: 2 },
  624: { items: 3 },
  924: { items: 4 },
};

const items = [
  <div className="item mx-2" data-value="1">
    <div class='carousel-product-card'>
      <img src='https://bizweb.dktcdn.net/thumb/large/100/369/704/products/29.jpg?v=1572418523850' />
      <p>Ghế phòng khách ND01</p>
      <span>2.000.000đ</span>
    </div>
  </div>,
  <div className="item mx-2" data-value="2">
    <div class='carousel-product-card'>
      <img src='https://bizweb.dktcdn.net/thumb/large/100/369/704/products/28.jpg?v=1572418508650' />
      <p>Ghế phòng khách ND01</p>
      <span>Liên hệ</span>
    </div>
  </div>,
  <div className="item mx-2" data-value="3">
    <div class='carousel-product-card'>
      <img src='https://bizweb.dktcdn.net/thumb/large/100/369/704/products/26.jpg?v=1572418490457' />
      <p>Ghế phòng khách ND01</p>
      <span>Liên hệ</span>
    </div>
  </div>,
  <div className="item mx-2" data-value="4">
    <div class='carousel-product-card'>
      <img src='https://bizweb.dktcdn.net/thumb/large/100/369/704/products/24.jpg?v=1572418458113' />
      <p>Ghế phòng khách ND01</p>
      <span>Liên hệ</span>
    </div>
  </div>,
  <div className="item mx-2" data-value="5">
    <div class='carousel-product-card'>
      <img src='https://bizweb.dktcdn.net/thumb/large/100/369/704/products/21.jpg?v=1572418433577' />
      <p>Ghế phòng khách ND01</p>
      <span>2.000.000đ</span>
    </div>
  </div>,
];

const CarouselProduct = (props) => (
  <Container>
    <div style={{ paddingTop: '30px' }} className="d-flex flex-column justify-content-center align-items-center">
      <hr width='350' />
      <p style={{ fontSize: '25px', fontWeight: 'bold' }}>{props.name}</p>
      <hr width='350' />
    </div>
    <AliceCarousel
      mouseTracking
      items={items}
      keyboardNavigation={true}
      responsive={responsive}
      controlsStrategy="alternate"
      renderPrevButton={() => {
        return <p className="p-4 absolute left-0 top-0"></p>
      }}
      renderNextButton={() => {
        return <p className="p-4 absolute right-0 top-0"></p>
      }}
    />
  </Container>
);

export default CarouselProduct