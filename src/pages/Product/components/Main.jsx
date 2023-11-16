import React from 'react'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { Col, Row } from 'react-bootstrap';
import { Divider } from '@mui/material';
import Pagination from '@mui/material/Pagination';
import { useNavigate } from 'react-router-dom';
import './style.css';
import Button from 'react-bootstrap/Button';
import AddIcon from '@mui/icons-material/Add';
import Container from 'react-bootstrap/Container';
import FormModal from './FormModal';
function Main(props) {
  const { show, handleCloseModal, handleSubmit, handleOpenModal } = props;
  const navigate = useNavigate();
  const [value, setValue] = React.useState('1');
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <div>
      <div className='background-primary-light b-gray d-flex justify-content-around align-items-center' style={{ paddingTop: '10px' }}>
        <div className='box-background d-flex justify-content-center align-items-center flex-column'>
          <img src='https://bizweb.dktcdn.net/100/369/704/themes/741072/assets/image_ab_1.png?1677115735837' />
          <p className='product-text-category' style={{ color: 'white' }}>Phòng ngủ</p>
        </div>
        <div className='box-background d-flex justify-content-center align-items-center flex-column'>
          <img src='https://bizweb.dktcdn.net/100/369/704/themes/741072/assets/image_ab_3.png?1677115735837' />
          <p className='product-text-category' style={{ color: 'white' }}>Ghế bành</p>
        </div>
        <div className='box-background d-flex justify-content-center align-items-center flex-column'>
          <img src='https://bizweb.dktcdn.net/100/369/704/themes/741072/assets/image_ab_2.png?1677115735837' />
          <p className='product-text-category' style={{ color: 'white' }}>Văn phòng</p>
        </div>
        <div className='box-background d-flex justify-content-center align-items-center flex-column'>
          <img src='https://bizweb.dktcdn.net/100/369/704/themes/741072/assets/image_ab_4.png?1677115735837' />
          <p className='product-text-category' style={{ color: 'white' }}>Kệ tủ</p>
        </div>
        <div className='box-background d-flex justify-content-center align-items-center flex-column'>
          <img src='https://bizweb.dktcdn.net/100/369/704/themes/741072/assets/image_ab_1.png?1677115735837' />
          <p className='product-text-category' style={{ color: 'white' }}>Phòng ngủ</p>
        </div>
      </div>
      <p style={{ fontWeight: 'bold', fontSize: '25px', textAlign: 'center', margin: '20px 0' }}>TẤT CẢ SẢN PHẨM</p>
      <Container>
        <Row>
          <Col lg={10}>
            <div className='d-flex align-items-center'>

              <span className='product-text-category' style={{ paddingRight: '10px' }}>Xếp theo</span>
              <FormControl>
                <RadioGroup
                  aria-labelledby="demo-controlled-radio-buttons-group"
                  name="controlled-radio-buttons-group"
                  value={value}
                  row
                  onChange={handleChange}
                >
                  <FormControlLabel value="1" control={<Radio />} label="Mặc định" />
                  <FormControlLabel value="2" control={<Radio />} label="Tên A-Z" />
                  <FormControlLabel value="3" control={<Radio />} label="Tên Z-A" />
                  <FormControlLabel value="4" control={<Radio />} label="Giá thấp đến cao" />
                  <FormControlLabel value="5" control={<Radio />} label="Giá cao đến thấp" />
                </RadioGroup>
              </FormControl>
            </div>
          </Col>
          <Col lg={2} style={{ textAlign: 'right' }}>
            <Button onClick={handleOpenModal} className="btn" variant="outline-primary">
              <AddIcon />
            </Button>
          </Col>
        </Row>
      </Container>

      <Divider sx={{ margin: '20px 0' }} />
      <Container>
        <Row style={{ marginBottom: '25px' }}>
          <Col lg='4' className='product-1'>
            <div className="item mx-2 box-background" data-value="1" onClick={() => navigate('/product/detail/1')}>
              <div class='carousel-product-card'>
                <img src='https://bizweb.dktcdn.net/thumb/large/100/369/704/products/29.jpg?v=1572418523850' alt='#' />
                <p>Ghế phòng khách ND01</p>
                <span className="color-green">2.000.000đ</span>
              </div>
            </div>
          </Col>
          <Col lg='4' className='product-1'>
            <div className="item mx-2 box-background" data-value="1">
              <div class='carousel-product-card'>
                <img src='https://bizweb.dktcdn.net/thumb/large/100/369/704/products/24.jpg?v=1572418458113' />
                <p>Ghế phòng khách ND01</p>
                <span className="color-green">Liên hệ</span>
              </div>
            </div>
          </Col>
          <Col lg='4'>
            <div className="item mx-2 box-background" data-value="1">
              <div class='carousel-product-card'>
                <img src='https://bizweb.dktcdn.net/thumb/large/100/369/704/products/21.jpg?v=1572418433577' />
                <p>Ghế phòng khách ND01</p>
                <span className="color-green">2.000.000đ</span>
              </div>
            </div>
          </Col>
        </Row>
        <Row style={{ marginBottom: '25px' }}>
          <Col lg='4' className='product-1'>
            <div className="item mx-2 box-background" data-value="1">
              <div class='carousel-product-card'>
                <img src='https://bizweb.dktcdn.net/thumb/large/100/369/704/products/28.jpg?v=1572418508650' />
                <p>Ghế phòng khách ND01</p>
                <span className="color-green">Liên hệ</span>
              </div>
            </div>
          </Col>
          <Col lg='4' className='product-1'>
            <div className="item mx-2" data-value="1">
              <div class='carousel-product-card'>
                <img src='https://bizweb.dktcdn.net/thumb/large/100/369/704/products/29.jpg?v=1572418523850' alt='#' />
                <p>Ghế phòng khách ND01</p>
                <span className="color-green">2.000.000đ</span>
              </div>
            </div>
          </Col>
          <Col lg='4'>
            <div className="item mx-2" data-value="1">
              <div class='carousel-product-card'>
                <img src='https://bizweb.dktcdn.net/thumb/large/100/369/704/products/29.jpg?v=1572418523850' alt='#' />
                <p>Ghế phòng khách ND01</p>
                <span className="color-green">2.000.000đ</span>
              </div>
            </div>
          </Col>
        </Row>
        <Row style={{ marginBottom: '25px' }}>
          <Col lg='4' className='product-1'>
            <div className="item mx-2" data-value="1">
              <div class='carousel-product-card'>
                <img src='https://bizweb.dktcdn.net/thumb/large/100/369/704/products/29.jpg?v=1572418523850' alt='#' />
                <p>Ghế phòng khách ND01</p>
                <span className="color-green">2.000.000đ</span>
              </div>
            </div>
          </Col>
          <Col lg='4' className='product-1'>
            <div className="item mx-2" data-value="1">
              <div class='carousel-product-card'>
                <img src='https://bizweb.dktcdn.net/thumb/large/100/369/704/products/29.jpg?v=1572418523850' alt='#' />
                <p>Ghế phòng khách ND01</p>
                <span className="color-green">2.000.000đ</span>
              </div>
            </div>
          </Col>
          <Col lg='4'>
            <div className="item mx-2" data-value="1">
              <div class='carousel-product-card'>
                <img src='https://bizweb.dktcdn.net/thumb/large/100/369/704/products/29.jpg?v=1572418523850' alt='#' />
                <p>Ghế phòng khách ND01</p>
                <span className="color-green">2.000.000đ</span>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <div className='d-flex justify-content-center align-items-center mb-5'>
        <Pagination count={10} variant="outlined" shape="rounded" />
      </div>
      <FormModal
        show={show}
        handleCloseModal={handleCloseModal}
        handleSubmit={handleSubmit}
      />
    </div >
  )
}

export default Main