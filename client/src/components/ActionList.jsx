import React from 'react';

function ActionList(props) {
  return (
    <div className="actionClass">
      <button className="actionElements" id="writeReview"><a href={`https://www.yelp.com/writeareview/biz/${props.infos.businessId}?return_url=%2Fbiz%2FSn88jc5tEJH-D4qxqZn8PQ&source=biz_details_war_button`}>Write A Review</a></button>
      <button className="actionElements" id="addPhoto"><a href={`https://www.yelp.com/biz_user_photos/${props.infos.businessId}/upload`}>Add Photos</a></button>
      <button className="actionElements" id="sharing"><a href="">Sharing</a></button>
      <button className="actionElements" id="addToBookMark" onClick={props.addBookMark}>Book Mark</button>
    </div>
  );
}

export default ActionList;
