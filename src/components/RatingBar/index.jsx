import React from 'react';
import ReactStars from 'react-rating-stars-component';

const RatingBar = ({
    chlidren,
    className,
    startCount = 5,
    color = "grey",
    activeColor = "red",
    isEditable = false,
    ...restProps
}) => {
    return (
        <>
            <ReactStars
                edit={isEditable}
                classNames={className}
                count={startCount}
                isHalf={false}
                color={color}
                activeColor={activeColor}
                {...restProps}
                key={restProps.value || 1}
            />
            {chlidren}
        </>
    );
}

export  {RatingBar};
