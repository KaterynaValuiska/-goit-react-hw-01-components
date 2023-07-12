import FriendListItem from "./FriendListItem";
import css from './Frieds.module.css'

function FriendList({ friends }) {
    return (
        <ul className={css.list}>
            {friends.map(friend => (
                <FriendListItem
                    key={friend.id}
                    avatar={friend.avatar}
                    nameFriend={friend.nameFriend}
                    isOnline={ friend.isOnline} />
  ))}
</ul>
    )
}

export default FriendList;