import React from 'react';

function ActionList(props) {
  return (
    <div className="actionClass">
      <a className="actionElements" id="writeReview" href={`https://www.yelp.com/writeareview/biz/${props.infos.businessId}?return_url=%2Fbiz%2FSn88jc5tEJH-D4qxqZn8PQ&source=biz_details_war_button`}>Write A Review</a>
      <span>
        <a className="actionElements" id="addPhoto" href={`https://www.yelp.com/biz_user_photos/${props.infos.businessId}/upload`}>Add Photos</a>
        <a className="actionElements" id="sharing" href={`https://www.yelp.com/biz_share/${props.infos.businessId}`}>Sharing</a>
        <a className="actionElements" id="addToBookMark" href={`https://www.yelp.com/bookmark/add_biz?biz_id=${props.infos.businessId}&return_url=%2Fbiz%2F1OGEnnsDdrJSziy9VwCRnA`}>Book Mark</a>
      </span>
    </div>
  );
}

export default ActionList;
