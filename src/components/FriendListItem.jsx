import PropTypes from 'prop-types'

const FriendListItem = ({
    avatar,
nameFriend,
isOnline,
}) => {
    return (
        <li class="item">
            <span class="status">{ isOnline}</span>
  <img class="avatar" src={avatar} alt="User avatar" width="48" />
            <p class="name"> {nameFriend }</p>
</li>
    )
}

FriendListItem.propTypes = {
    avatar: PropTypes.string,
nameFriend: PropTypes.string,
isOnline: PropTypes.bool,
    
}
export default FriendListItem;