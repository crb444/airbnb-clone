import React from "react";
import FavouriteIcon from "@material-ui/icons/FavoriteRounded";
import StarIcon from "@material-ui/icons/Star";
import Divider from "@material-ui/core/Divider";
import "./SearchResult.css";

const SearchResult = ({
  location,
  title,
  description,
  star,
  price,
  totalPrice,
  img,
}) => {
  return (
    <div className="searchresult">
      <div className="searchresult__img">
        <img src={img} />
      </div>
      <div className="searchresult__description">
        <div className="searchresult_decriptionsLocation">
          <h4>{location} </h4>
          <FavouriteIcon />
        </div>
        <div className="searchresult_decriptionsTitle">
          <h3>{title}</h3>
        </div>
        <div className="searchresult__divider">
          <Divider />
        </div>
        <div className="searchresult_descriptionBottom">
          <h3>{description}</h3>
        </div>
        <div className="searchresult__prices">
          <div className="searchresult__pricesLeft">
            <StarIcon />
            <h3>{star}</h3>
          </div>
          <div className="searchresult__pricesRight">
            <h4>{price}</h4>
            <h3>{totalPrice}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchResult;
