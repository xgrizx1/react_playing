import React from "react";
import "./Card.scss";

const Card = ({title, image="https://jeffwalker.com/wp-content/uploads/2018/04/bannersec.jpg", numComments = 0, className}) => {
    return (
        <div className={`custom-card ${className}`}>
            <img src={image} alt="Avatar" style={{width:"100%"}} />
            <div className="container">
                <h4><b>{title}</b></h4>
                <div className="comments">{numComments} comments</div>
            </div>
        </div>
    )
};

export default Card;