import React from 'react';
import PropTypes from 'prop-types';

const Review = ({review}) => {
  const {author, profilePhoto, rating, text, datetime} = review;

  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={profilePhoto} width="54" height="54" alt="Reviews avatar" />
        </div>
        <span className="reviews__user-name">
          {author}
        </span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{width: rating}} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {text}
        </p>
        <time className="reviews__time" dateTime="2019-04-24">{datetime}</time>
      </div>
    </li>
  );
};

Review.propTypes = {
  review: PropTypes.shape({
    id: PropTypes.number.isRequired,
    author: PropTypes.string.isRequired,
    profilePhoto: PropTypes.string.isRequired,
    rating: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    datetime: PropTypes.string.isRequired
  }).isRequired
};

export default Review;
