import PropTypes from 'prop-types'
import css from './Transaction.module.css'

function TransactionHistory({transactions}) {
    return (
        <>
            <h2 className={css.title}>
        Transactions</h2>
        <table className={css.transactionHistory}>
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
            </thead>
            <tbody className={css.tableBody}>
                {transactions.map((transaction) => (
                <tr key={transaction.id}>
      <td>{transaction.type}</td>
            <td>{ transaction.amount}</td>
                <td>{ transaction.currency}</td>
    </tr>
            ))}
  </tbody>
        </table>
      </>  
    )
}

TransactionHistory.propTypes = {
    transactions: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            amount: PropTypes.string.isRequired,
            currency: PropTypes.string.isRequired,
        })
    ).isRequired
}

export default TransactionHistory