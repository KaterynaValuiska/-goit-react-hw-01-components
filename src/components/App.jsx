import user from './json/user.json'
import data from './json/data.json'
import Profile from './Profile'
import StatisticsList from './StatisticsList'


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
      />
      <h2 class="title">Upload stats</h2> 
      <StatisticsList data={data } />
    </div>
  );
};
