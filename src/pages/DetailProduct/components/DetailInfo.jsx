import { Button, Divider } from '@mui/material';
import React from 'react'
import { useState } from 'react';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Accordion from 'react-bootstrap/Accordion';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
function DetailInfo(props) {
  const { dataInfo } = props;
  return (
    <div className="product-detail">
      <h3 className="mb-3">{dataInfo?.name}</h3>
      <p>{dataInfo?.address}</p>
      <div class="d-flex align-items-center mb-4">
        <Button className="btn-qty" variant="secondary">Booking</Button>
      </div>
    </div>
  )
}

export default DetailInfo