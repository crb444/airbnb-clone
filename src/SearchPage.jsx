import React from "react";
import "./SearchPage.css";
import SearchResult from "./SearchResult";
import { searchResults } from "./data";

const SearchPage = () => {
  return (
    <div className="searchpage">
      {searchResults.map((result) => {
        return (
          <SearchResult
            location={result.location}
            title={result.title}
            description={result.description}
            star={result.star}
            price={result.price}
            totalPrice={result.totalPrice}
            img={result.img}
          />
        );
      })}
    </div>
  );
};

export default SearchPage;
