import PropTypes from 'prop-types';
import FriendItem from '../FriendItem';
import styles from './FriendList.module.css';

FriendList.propTypes = {
  friends: PropTypes.array.isRequired,
};

export default function FriendList({ friends }) {
  return (
    <ul className={styles.friendList}>
      {friends.map(({ id, avatar, name, isOnline }) => (
        <FriendItem key={id} avatar={avatar} name={name} isOnline={isOnline} />
      ))}
    </ul>
  );
}
