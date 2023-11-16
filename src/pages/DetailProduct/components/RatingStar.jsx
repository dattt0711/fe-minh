import React, { useState } from 'react';
import StarOutlineIcon from '@mui/icons-material/StarOutline';

function RatingStar(props) {
    const { isShowValue, value, maxRating, handleRating } = props;
    const [rating, setRating] = useState(0);

    function handleRatingClick(index) {
        setRating(index + 1);
        handleRating(index + 1);
    }

    return isShowValue ? (
        <div className="rating-star">
            {[...Array(maxRating)].map((_, index) => {
                return (
                    <StarOutlineIcon
                        key={index}
                        className={index < value ? "star filled" : "star empty"}
                    />

                );
            })
            }
        </div >
    ) :
        (
            <div className="rating-star">
                {[...Array(props.maxRating)].map((_, index) => {
                    return (
                        <StarOutlineIcon
                            key={index}
                            className={index < value ? "star filled" : "star empty"}
                            onClick={() => handleRatingClick(index)}
                        />
                    );
                })
                }
            </div >
        )
}

export default RatingStar;