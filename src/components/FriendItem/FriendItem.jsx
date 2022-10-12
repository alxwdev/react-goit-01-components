import PropTypes from 'prop-types';
import defaultAvatar from '../../images/defaultAvatar.jpg';
import styles from './FriendItem.module.css';

FriendListItem.defaultProps = {
  avatar: defaultAvatar,
};

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default function FriendListItem({ id, avatar, name, isOnline }) {
  const statusColor = isOnline ? '#00ff00' : '#ff0000';
  const statusStyle = {
    backgroundColor: statusColor,
  };

  return (
    <li className={styles.item}>
      <span className={styles.status} style={statusStyle}></span>
      <img
        className={styles.avatar}
        src={avatar}
        alt="User avatar"
        width="48"
      />
      <p className={styles.name}>{name}</p>
    </li>
  );
}
