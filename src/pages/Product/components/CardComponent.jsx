import { Divider } from '@mui/material'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './style.css'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import CallIcon from '@mui/icons-material/Call';
import Button from 'react-bootstrap/Button';
import { Link, useParams } from "react-router-dom";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
export default function CardComponent(props) {

    const { isAdmin = true, dataItem, handleOpenEditModal, isShowBtn = true, handleDelete } = props;
    return (
        <div className="card">
            {/* <div className="p-3">
                <FavoriteBorderIcon />
            </div> */}
            <div className="card-body d-flex align-items-center flex-column">
                <div className="card-image">
                    <img src={dataItem?.image} alt="" />
                </div>
                <Link to={`/product/detail/${dataItem?._id}`} style={{ textDecoration: 'none' }}>
                    <h4 className="text-dark my-3" >{dataItem?.name}</h4>
                </Link>
                <p>Phone: {dataItem?.phoneNumber}</p>
                <p>Price: {dataItem?.price || 0}$</p>
                {isShowBtn && <span >
                    <Link to={`/cart`}>
                        <CallIcon className="btn-order" />
                    </Link>
                </span>}
            </div>
            {isShowBtn && <div className="d-flex justify-content-center mb-3">
                {isAdmin && <Button className="btn-bold me-2" onClick={() => handleOpenEditModal(dataItem?._id)}>
                    <EditIcon />
                </Button>}
                {isAdmin && <Button className="btn-bold ms-2" onClick={() => handleDelete(dataItem?._id)}>
                    <DeleteIcon />
                </Button>}
            </div>}
        </div>
    )
}
