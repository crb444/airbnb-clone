import React from 'react'
import './Card.css'


const Card = ({url,title, description, price}) => {
    return (
        <div className="card">
            <img src={url}/>
            <div className="card__description">
                <h5>{title}</h5>
                <h4>{description}</h4>
                <h5>{price}</h5>
            </div>
        </div>
    )
}

export default Card; 