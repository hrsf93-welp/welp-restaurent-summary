import React from 'react';

function SummaryInfos(props) {
  return (
    <div className="header-left">
      <div className="titleClass">
        <div className="titleLine" id="restaurantName">Jin's</div>
        <div className="titleLine" id="restaurantClaimed">CheckMarkHere</div>
        <div className="titleLine" id="restaurantClaimed">claimed</div>
      </div>
      <div className="ratingClass">
        <div className="reviewLine" id="restaurantStars">starsHere</div>
        <div className="reviewLine" id="restaurantReviewCount">1000 reviews</div>
        <button className="reviewLine" id="restaurantDetail">Detail</button>
      </div>
      <div className="categoryClass">
        <span id="priceRange" href="https://www.w3schools.com">$$</span>
        <span id="bullet" href="https://www.w3schools.com">•</span>
        <a className="categories" href="https://www.yelp.com/search?find_desc=mexican&find_loc=Financial+District,+San+Francisco,+CA">Mexican,</a>
        <a className="categories" href="https://www.yelp.com/search?find_desc=taco&find_loc=Financial+District,+San+Francisco,+CA">Taco,</a>
        <a className="categories" href="https://www.yelp.com/search?find_desc=lunch&find_loc=Financial+District,+San+Francisco,+CA">Lunch</a>
        <button className="categories" id="restaurantEdit">edit</button>
      </div>
    </div>
  );
}
export default SummaryInfos;
