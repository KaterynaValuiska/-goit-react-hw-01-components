import Statistics from './Statistics'
import PropTypes from 'prop-types'
import css from './Statistics.module.css'

function StatisticsList({data }) {
  return (
      
         <ul className={css.stats}>
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

StatisticsList.propTypes = {
  data: PropTypes.array,
}

export default StatisticsList;