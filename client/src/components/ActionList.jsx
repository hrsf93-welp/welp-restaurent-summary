import React from 'react';

function ActionList(props) {
  return (
    <div className="actionClass">
      <button className="actionElements" id="writeReview">Write A Review</button>
      <button className="actionElements" id="addPhoto">Add Photos</button>
      <button className="actionElements" id="sharing">Sharing</button>
      <button className="actionElements" id="addToBookMark">Book Mark</button>
    </div>
  );
}

export default ActionList;
