import Statistics from './Statistics'

function StatisticsList({data }) {
    return (
         <ul class="stat-list">
      {data.map(el => (
        <Statistics
          key={el.id}
          title="Upload stats"
          percentage={el.percentage}
          label={el.label } /> 
      ))}
      </ul>
    )
}

export default StatisticsList;