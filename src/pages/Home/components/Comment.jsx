import React, { useRef } from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const items = [
  <div className="comment-item item" data-value="1">
    <img src='https://bizweb.dktcdn.net/100/369/704/themes/741072/assets/reviews_4_img.jpg?1677115735837' alt='#' />
    <div className='comment-item-text'>
      <p>Lần đầu đến mua tiệm thấy rất gọn gàng, sáng sủa, thoáng mát dễ chịu. Nhân viên nói chuyện nhỏ nhẹ, lịch sự, rất tôn trọng khách.</p>
      <p className='font-bold font-18'>Thùy Dương - Người mẫu</p>
    </div>
  </div>,
  <div className="comment-item item" data-value="2">
    <img src='https://bizweb.dktcdn.net/100/369/704/themes/741072/assets/reviews_3_img.jpg?1677115735837' alt='#' />
    <div className='comment-item-text'>
      <p>Lần đầu đến mua tiệm thấy rất gọn gàng, sáng sủa, thoáng mát dễ chịu. Nhân viên nói chuyện nhỏ nhẹ, lịch sự, rất tôn trọng khách.</p>
      <p className='font-bold font-18'>Dungpt3 - dev</p>
    </div>
  </div>,
  <div className="comment-item item" data-value="3">
    <img src='	https://bizweb.dktcdn.net/100/369/704/themes/741072/assets/reviews_2_img.jpg?1677115735837' alt='#' />
    <div className='comment-item-text'>
      <p>Lần đầu đến mua tiệm thấy rất gọn gàng, sáng sủa, thoáng mát dễ chịu. Nhân viên nói chuyện nhỏ nhẹ, lịch sự, rất tôn trọng khách.</p>
      <p className='font-bold font-18'>Dungpt3 - dev</p>
    </div>
  </div>,
  <div className="comment-item item" data-value="4">
    <img src='https://bizweb.dktcdn.net/100/369/704/themes/741072/assets/reviews_4_img.jpg?1677115735837' alt='#' />
    <div className='comment-item-text'>
      <p>Lần đầu đến mua tiệm thấy rất gọn gàng, sáng sủa, thoáng mát dễ chịu. Nhân viên nói chuyện nhỏ nhẹ, lịch sự, rất tôn trọng khách.</p>
      <p className='font-bold font-18'>Dungpt3 - dev</p>
    </div>
  </div>,
  <div className="comment-item item" data-value="5">
    <img src='https://bizweb.dktcdn.net/100/369/704/themes/741072/assets/reviews_4_img.jpg?1677115735837' alt='#' />
    <div className='comment-item-text'>
      <p>Lần đầu đến mua tiệm thấy rất gọn gàng, sáng sủa, thoáng mát dễ chịu. Nhân viên nói chuyện nhỏ nhẹ, lịch sự, rất tôn trọng khách.</p>
      <p className='font-bold font-18'>Dungpt3 - dev</p>
    </div>
  </div>,
];

function Comment() {
  const carousel = useRef < AliceCarousel > (null);
  return (
    <div className='comment'>
      <AliceCarousel
        key="carousel"
        mouseTracking
        disableDotsControls
        disableButtonsControls
        items={items}
        refs={carousel}
      />
    </div>
  )
}

export default Comment