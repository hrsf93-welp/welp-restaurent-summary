import React from 'react';

const SummaryInfos = props => (
  <div className="header-left">
    <div className="titleClass">
      <div className="titleLine" id="restaurantName">{ props.infos.name }</div>
      <div className="titleLine" id="restaurantClaimed">CheckMarkHere</div>
      <div className="titleLine" id="restaurantClaimed"><a data-toggle="tooltip" data-placement="top" title="This business has been claimed by the owner or a representative!">claimed</a></div>
    </div>
    <div className="ratingClass">
      <div className="reviewLine" id="restaurantStars">{props.infos.stars}</div>
      <div className="reviewLine" id="restaurantReviewCount">{ props.infos.reviewCount } reviews</div>
      <button className="reviewLine" id="restaurantDetail">Detail</button>
    </div>
    <div className="categoryClass">
      <span id="priceRange">$$</span>
      <span id="bullet">•</span>
      <a className="categories" href="https://www.yelp.com/search?find_desc=mexican&find_loc=Financial+District,+San+Francisco,+CA">Mexican,</a>
      <a className="categories" href="https://www.yelp.com/search?find_desc=taco&find_loc=Financial+District,+San+Francisco,+CA">Taco,</a>
      <a className="categories" href="https://www.yelp.com/search?find_desc=lunch&find_loc=Financial+District,+San+Francisco,+CA">Lunch</a>
      <button className="categories" id="restaurantEdit">edit</button>
    </div>
  </div>
);

export default SummaryInfos;
