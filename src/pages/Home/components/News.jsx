import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { Container } from 'react-bootstrap';
import './style.css'

const responsive = {
  0: { items: 1 },
  428: { items: 2 },
};

const items = [
  <div className="item item-news mx-2" data-value="1">
    <div class='carousel-product-news'>
      <img src='https://bizweb.dktcdn.net/thumb/large/100/369/704/products/29.jpg?v=1572418523850' />
      <div>
        <p>Ghế phòng khách ND01</p>
        <span>Đang cập nhật</span>
      </div>
    </div>
    <div class='carousel-product-news-time'>
      <p className='day'>15</p>
      <p className='mouth'>Tháng 11</p>
    </div>
  </div>,
  <div className="item item-news mx-2" data-value="2">
    <div class='carousel-product-news'>
      <img src='https://bizweb.dktcdn.net/thumb/large/100/369/704/products/28.jpg?v=1572418508650' />
      <div>
        <p>Ghế phòng khách ND01</p>
        <span>xu hướng mới</span>
      </div>
    </div>
    <div class='carousel-product-news-time'>
      <p className='day'>15</p>
      <p className='mouth'>Tháng 11</p>
    </div>
  </div>,
  <div className="item item-news mx-2" data-value="3">
    <div class='carousel-product-news'>
      <img src='https://bizweb.dktcdn.net/thumb/large/100/369/704/products/26.jpg?v=1572418490457' />
      <div>
        <p>Ghế phòng khách ND01</p>
        <span>Đang cập nhật</span>
      </div>
    </div>
    <div class='carousel-product-news-time'>
      <p className='day'>15</p>
      <p className='mouth'>Tháng 11</p>
    </div>
  </div>,
  <div className="item item-news mx-2" data-value="4">
    <div class='carousel-product-news'>
      <img src='https://bizweb.dktcdn.net/thumb/large/100/369/704/products/24.jpg?v=1572418458113' />
      <div>
        <p>Ghế phòng khách ND01</p>
        <span>Đang cập nhật</span>
      </div>
    </div>
    <div class='carousel-product-news-time'>
      <p className='day'>15</p>
      <p className='mouth'>Tháng 11</p>
    </div>
  </div>,
  <div className="item item-news mx-2" data-value="5">
    <div class='carousel-product-news'>
      <img src='https://bizweb.dktcdn.net/thumb/large/100/369/704/products/21.jpg?v=1572418433577' />
      <div>
        <p>Ghế phòng khách ND01</p>
        <span>Đang cập nhật</span>
      </div>
    </div>
    <div class='carousel-product-news-time'>
      <p className='day'>15</p>
      <p className='mouth'>Tháng 11</p>
    </div>
  </div>,
];

const CarouselProduct = () => (
  <Container>
    <div style={{ paddingTop: '30px' }} className="d-flex flex-column justify-content-center align-items-center">
      <hr width='350' />
      <p style={{ fontSize: '25px', fontWeight: 'bold' }}>Tin tuc mới nhất</p>
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