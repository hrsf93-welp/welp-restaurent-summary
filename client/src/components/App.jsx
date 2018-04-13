import React from 'react';

class App extends React.Component {
constructor(props) {
    super(props);
    this.state = {
      value: null,
    };
  }
  render() {
    return (
      <div id="header">
        <div className="header-left">
          <div className="titleClass">
            <div className="titleLine" id="restaurantName">Bunn Mike</div>
            <div className="titleLine" id="restaurantClaimed">claimed</div>
            <div className="titleLine" id="restaurantClaimed">claimed</div>
          </div>
          <div className="ratingClass">
            <div className="reviewLine" id="restaurantStars">stars</div>
            <div className="reviewLine" id="restaurantReviewCount">16 reviews</div>
            <button className="reviewLine" id="restaurantDetail">Detail</button>
          </div>
          <div className="categoryClass">
            <span id="priceRange" href="https://www.w3schools.com">$$</span>
            <span id="bullet" href="https://www.w3schools.com">•</span>
            <a className="categories" href="https://www.w3schools.com">Mexican,</a>
            <a className="categories" href="https://www.w3schools.com">Taco,</a>
            <a className="categories" href="https://www.w3schools.com">Lunch</a>
            <button className="categories" id="restaurantEdit">edit</button>
          </div>
        </div>
        <div className="actionClass">
          <button className="actionElements" id="writeReview">Write A Review</button>
          <button className="actionElements" id="addPhoto">Add Photos</button>
          <button className="actionElements" id="sharing">Sharing</button>
          <button className="actionElements" id="addToBookMark">Book Mark</button>
        </div>
      </div>
    );
  }
}

export default App;