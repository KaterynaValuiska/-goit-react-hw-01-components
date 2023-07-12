import PropTypes from 'prop-types'
import css from './Statistics.module.css'

const Statistics = ({
    label,
    percentage,
}) => {
    return (
    <li className={css.item}>
                    <span className={css.label}>{label }</span>
      <span className={css.percentage}>{percentage } %</span>
    </li>
    )
}

Statistics.propTypes = {
    label: PropTypes.string,
    stats: PropTypes.number,
 
}
export default Statistics;