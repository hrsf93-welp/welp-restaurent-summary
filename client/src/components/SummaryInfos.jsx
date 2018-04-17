import React from 'react';
const priceRange = {
  1: '$',
  2: '$$',
  3: '$$$',
  4: '$$$$',
};
function SummaryInfos(props) {
  return (
    <div className="header-left">
      <div className="titleClass">
        <span className="titleLine" id="restaurantName">{ props.infos.name }</span>
        <span className="titleLine" id="restaurantClaimed">{ props.infos.claimed? <span><img src='./claim.png' alt="claimed" />claimed</span> : 'notclaimed' }</span>
      </div>
      <div className="ratingClass">
        <img className="reviewLine" id="restaurantStars" src={`./${props.infos.stars}.png`} alt={props.infos.stars} />
        <span className="reviewLine" id="restaurantReviewCount">{ props.infos.reviewCount } reviews</span>
        <button className="reviewLine" id="restaurantDetail">Detail</button>
      </div>
      <div className="categoryClass">
        <span id="priceRange">{priceRange[props.infos.restaurantsPriceRange2]}</span>
        <span id="bullet">•</span>
        <a className="categories" href="https://www.yelp.com/search?find_desc=mexican&find_loc=Financial+District,+San+Francisco,+CA">Mexican,</a>
        <a className="categories" href="https://www.yelp.com/search?find_desc=taco&find_loc=Financial+District,+San+Francisco,+CA">Taco,</a>
        <a className="categories" href="https://www.yelp.com/search?find_desc=lunch&find_loc=Financial+District,+San+Francisco,+CA">Lunch</a>
        <button className="categories" id="restaurantEdit">edit</button>
      </div>
    </div>
  );
}
export default SummaryInfos;
