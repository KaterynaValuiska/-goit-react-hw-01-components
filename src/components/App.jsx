import user from './json/user.json'
import data from './json/data.json'
import friends from './json/friends.json'
import transactions from './json/transactions.json'
import Profile from './Profile'
import StatisticsList from './StatisticsList'
import FriendList from './FriendList'
import TransactionHistory from './TransactionHistory'


export const App = () => {
  return (
    <div
      // style={{
      //   height: '100vh',
      //   display: 'flex',
      //   justifyContent: 'center',
      //   alignItems: 'center',
      //   fontSize: 40,
      //   color: '#010101'
      // }}
    >
      <Profile
  username={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats}
      /><h2 style={{
        fontSize: '30px',
    fontWeight: 600,
    textAlign: 'center',
    marginBottom: '8px',
    marginTop: '16px',
      }}>
        Upload stats</h2> 
      <StatisticsList data={data} />
      <h2 style={{
        fontSize: '30px',
    fontWeight: 600,
    textAlign: 'center',
    marginBottom: '8px',
    marginTop: '16px',
      }}>
        Friends</h2> 
      <FriendList friends={friends} />;
      <TransactionHistory transactions={transactions} />;
    </div>
  );
};
