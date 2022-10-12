import user from './data/user.json';
import statistics from './data/statistics.json';
import friends from './data/friends.json';
import transactions from './data/transactions.json';
import Profile from './components/Profile';
import Statistics from './components/Statistics';
import FriendList from './components/FriendList';
import TransactionHistory from './components/TransactionHistory';

export default function App() {
  const { username, tag, location, avatar, stats } = user;

  return (
    <>
      <Profile
        username={username}
        tag={tag}
        location={location}
        avatar={avatar}
        stats={stats}
      />
      <br />
      <Statistics title="Upload stats" statistics={statistics} />
      <br />
      <FriendList friends={friends} />
      <br />
      <TransactionHistory transactions={transactions} />
    </>
  );
}
