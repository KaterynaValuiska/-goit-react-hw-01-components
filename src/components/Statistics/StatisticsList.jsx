
import PropTypes from 'prop-types'
import css from './Statistics.module.css'

function StatisticsList({stats, title }) {
  return (
    <section>
      {title && <h2 className={css.title}>{title}</h2>}
      <ul className={css.stats}>
        {stats.map(({ id, label, percentage }) => (
          <li className={css.item}
            key={id}
            style={{
              backgroundColor: '#' + RandomColor(),
              width: `calc(100%/${stats.length})`
            }}>
            <span className={css.label}>{label}</span>
            <span className={css.percentage}>{percentage} %</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

StatisticsList.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
}

function RandomColor() {
  return Math.floor(Math.random() * 16777215).toString(16);
}

export default StatisticsList;