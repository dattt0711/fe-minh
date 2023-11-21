import { Button } from '@mui/material';
import React from 'react'
import { Link } from 'react-router-dom';
function DetailInfo(props) {
  const { dataInfo } = props;
  return (
    <div className="product-detail">
      <h3 className="mb-3">{dataInfo?.name}</h3>
      <p> <span className="fw-bold">Address: </span>{dataInfo?.address}</p>
      <p> <span className="fw-bold">Phone to contact: </span>{dataInfo?.phoneNumber}</p>
      <p> <span className="fw-bold">Price for booking: </span>{dataInfo?.price}$</p>
      <div className="d-flex align-items-center mb-4">
        <Link to={`/cart/${dataInfo?._id}`}>
          <Button className="btn-qty" variant="secondary">Booking</Button>
        </Link>
      </div>
    </div>
  )
}

export default DetailInfo