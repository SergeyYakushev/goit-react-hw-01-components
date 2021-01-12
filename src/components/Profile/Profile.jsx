import React from 'react';
import PropTypes from 'prop-types';
import s from './Profile.module.css';

function Profile({
  name,
  tag,
  location,
  avatar = 'https://www.flaticon.com/svg/static/icons/svg/3135/3135715.svg',
  stats: { followers, views, likes },
}) {
  return (
    <div className={s.profile}>
      <div className={s.description}>
        <img
          src={avatar}
          alt={`Аватар пользователя ${name}`}
          className={s.avatar}
        />
        <p className={s.name}>{name}</p>
        <p className={s.tag}>{`@ ${tag}`}</p>
        <p className={s.location}>{location}</p>
      </div>

      <ul className={s.stats}>
        <li>
          <span className={s.label}>Followers</span>
          <span className={s.quantity}>{followers}</span>
        </li>
        <li>
          <span className={s.label}>Views</span>
          <span className={s.quantity}>{views}</span>
        </li>
        <li>
          <span className={s.label}>Likes</span>
          <span className={s.quantity}>{likes}</span>
        </li>
      </ul>
    </div>
  );
}

Profile.propTypes = {
  avatar: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    views: PropTypes.number,
    likes: PropTypes.number,
    followers: PropTypes.number,
  }),
};

export default Profile;
