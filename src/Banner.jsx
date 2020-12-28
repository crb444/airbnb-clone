import React from "react";
import "./Banner.css";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="banner">
      <div className="banner__description">
        <div className="banner__descriptionTop">
          <h2>Get out and stretch your imagination</h2>
        </div>

        <div className="banner__descriptionBottom">
          <h2>
            Plan a different kind of getaway to uncover the hidden gems near you
          </h2>

          <Button>
            {" "}
            <Link
              to="/search"
              style={{ textDecoration: "none", color: "white" }}
            >
              Explore nearby
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
