import PropTypes from 'prop-types'
import FriendListItem from "./FriendListItem";
import css from './Frieds.module.css'

function FriendList({ friends }) {
    return (
        <>
            <h2 className={css.title}>
        Friends</h2> 
        <ul className={css.list}>
            {friends.map(friend => (
                <FriendListItem
                    key={friend.id}
                    avatar={friend.avatar}
                    nameFriend={friend.nameFriend}
                    isOnline={ friend.isOnline} />
  ))}
</ul>
      </>  
    )
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            avatar: PropTypes.string.isRequired,
            nameFriend: PropTypes.string.isRequired,
            isOnline: PropTypes.bool.isRequired,
        }).isRequired
    ).isRequired
}

export default FriendList;