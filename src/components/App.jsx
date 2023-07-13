import user from '../json/user.json'
import data from '../json/data.json'
import friends from '../json/friends.json'
import transactions from '../json/transactions.json'
import Profile from './Profile/Profile'
import StatisticsList from './Statistics/StatisticsList'
import FriendList from './Friends/FriendList'
import TransactionHistory from './Transaction/TransactionHistory'


export const App = () => {
  return (
    <div
      style={{
        backgroundColor: 'bisque',
      }}
    >
      <Profile
  username={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats}
      />
      <StatisticsList stats={data} title='Upload stats' />
      <FriendList friends={friends} />;
      <TransactionHistory transactions={transactions} />;
    </div>
  );
};
