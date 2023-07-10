import user from './json/user.json'
import data from './json/data.json'
import Profile from './Profile'
import Statistics from './Statistics'


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
      <ul class="stat-list">
      {data.map(el => (
        <Statistics
          key={el.id}
          title="Upload stats"
          percentage={el.percentage}
          label={el.label } /> 
      ))}
      </ul>
    </div>
  );
};
