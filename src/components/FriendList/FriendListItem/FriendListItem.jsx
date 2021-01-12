import React from 'react';
import PropTypes from 'prop-types';
import s from './FriendListItem.module.css';

function FriendListItem({ avatar, name, isOnline }) {
  const styleStatus = isOnline === true ? s.active : s.noActive;
  return (
    <li className={s.item}>
      <span className={styleStatus}></span>
      <img
        className={s.avatar}
        src={avatar}
        alt={`Аватар пользователя ${name}`}
        width="48"
      />
      <p className={s.name}>{name}</p>
    </li>
  );
}

FriendListItem.defaultProps = {
  name: 'Name',
  avatar: 'https://www.flaticon.com/svg/static/icons/svg/3135/3135715.svg',
  isOnline: false,
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;
