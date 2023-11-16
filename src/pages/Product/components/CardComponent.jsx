import { Divider } from '@mui/material'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './style.css'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import ProductImage from '../../../images/product.png';
import Button from 'react-bootstrap/Button';
import { Link, useParams } from "react-router-dom";

export default function CardComponent(props) {

    const { isAdmin = true, dataItem, handleOpenEditModal, isShowBtn = true, handleDelete, handleAddToCart } = props;
    return (
        <div className="card">
            <div className="p-3">
                <FavoriteBorderIcon />
            </div>
            <div className="card-body d-flex align-items-center flex-column">
                <div className="card-image">
                    <img src={dataItem?.image} alt="" />
                </div>
                <Link to={`/product/detail/${dataItem?._id}`} style={{ textDecoration: 'none' }}>
                    <h4 className="text-dark my-3" >{dataItem?.productName}</h4>
                </Link>
                <p>${dataItem?.price}</p>
                {isShowBtn && <span >
                    <ControlPointIcon onClick={() => handleAddToCart(dataItem?._id, 1)} />
                </span>}
            </div>
            {isShowBtn && <div className="d-flex justify-content-center mb-3">
                {isAdmin && <Button className="btn-bold me-2" onClick={() => handleOpenEditModal(dataItem?._id)}>Edit</Button>}
                {isAdmin && <Button className="btn-pri ms-2" onClick={() => handleDelete(dataItem?._id)}>Delete</Button>}
            </div>}
        </div>
    )
}
