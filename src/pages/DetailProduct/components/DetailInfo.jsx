import { Button, Divider } from '@mui/material';
import React from 'react'
import { useState } from 'react';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Accordion from 'react-bootstrap/Accordion';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
function DetailInfo(props) {
  const { dataInfo, handleChangeQuantity, quantity, handleAddToCart } = props;
  return (
    <div className="product-detail">
      <h3 className="mb-3">{dataInfo?.productName}</h3>
      <p>{dataInfo?.description}</p>
      <div class="d-flex align-items-center mb-4">
        <span className="me-5 product-price">$49.98</span>
        <ButtonGroup className="me-5" aria-label="Basic example">
          <Button className="btn-qty" variant="secondary" onClick={() => handleChangeQuantity("minus")}>
            <RemoveIcon />
          </Button>
          <Button className="btn-qty" variant="secondary">{quantity}</Button>
          <Button className="btn-qty" variant="secondary" onClick={() => handleChangeQuantity("plus")}>
            <AddIcon />
          </Button>
        </ButtonGroup>
        <Button className="btn-qty" variant="secondary" onClick={() => handleAddToCart(dataInfo?._id)}>Add to cart</Button>
      </div>
      <div class="favorites pb-2">
        <Button style={{ color: "black" }}>
          <FavoriteBorderIcon className="me-2" />
        </Button>
        Add to favorites
      </div>
      <div className="mt-3">
        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header >
              DETAILS
            </Accordion.Header>
            <Accordion.Body>
              {dataInfo?.details}
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </div>
  )
}

export default DetailInfo