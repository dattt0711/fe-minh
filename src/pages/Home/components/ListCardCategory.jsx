import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './style.css';

function ListCardCategory() {
  return (
    <Container className='mt-2'>
      <div style={{ paddingTop: '30px' }} className="d-flex flex-column justify-content-center align-items-center">
        <hr width='350' />
        <p style={{ fontSize: '25px', fontWeight: 'bold' }}>Danh mục sản phẩm</p>
        <hr width='350' />
      </div>
      <Row>
        <Col sm>
          <div className='card-category card-category-1'>
            <p>Sàn gỗ</p>
            <div className='overlay-card-category'></div>
          </div>
        </Col>
        <Col sm>
          <div className='card-category card-category-2'>
            <p>Sàn nhựa</p>
            <div className='overlay-card-category'></div>
          </div>
        </Col>
        <Col sm>
          <div className='card-category card-category-3'>
            <p>Thảm văn phòng</p>
            <div className='overlay-card-category'></div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col sm>
          <div className='card-category card-category-4'>
            <p>Giấy dán tường</p>
            <div className='overlay-card-category'></div>
          </div>
        </Col>
        <Col sm>
          <div className='card-category card-category-5'>
            <p>Ốp tường vân đá, gỗ</p>
            <div className='overlay-card-category'></div>
          </div>
        </Col>
        <Col sm>
          <div className='card-category card-category-6'>
            <p>Sân ngoài chơi</p>
            <div className='overlay-card-category'></div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default ListCardCategory;

