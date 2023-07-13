import PropTypes from 'prop-types'
import css from './Frieds.module.css'

const FriendListItem = ({
    avatar,
nameFriend,
isOnline = true,
}) => {
    return (
        <li className={css.item}>
            
            {isOnline ? <span className={css.statusActiv}>o</span> : <span className={css.statusNo}>x</span>}
  <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
            <p className={css.name}> {nameFriend }</p>
</li>
    )
}

FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
nameFriend: PropTypes.string.isRequired,
isOnline: PropTypes.bool.isRequired,
    
}
export default FriendListItem;