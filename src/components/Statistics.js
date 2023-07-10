import PropTypes from 'prop-types'

const Statistics = ({
    label,
    percentage,
}) => {
    return (
        <section class="statistics">
    <li class="item">
                    <span class="label">{label }</span>
      <span class="percentage">{percentage } %</span>
    </li>
</section>
    )
}

Statistics.propTypes = {
    label: PropTypes.string,
    stats: PropTypes.number,
 
}
export default Statistics;