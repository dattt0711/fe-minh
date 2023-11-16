import { Divider } from '@mui/material'
import React from 'react'
import { useRef } from 'react';
import RatingStar from './RatingStar';
function Review(props) {
    const { data } = props;
    return (
        <div class="review black-color pb-3 mt-3">
            <p>Frances Guerrero</p>
            <div className="mb-2 d-flex justify-content-between">
                <span>{data?.brief}</span>
                <RatingStar isShowValue={true} maxRating={5} value={data?.rating} />
            </div>
            <p>{data?.comment}</p>
        </div >
    )
}

export default Review;