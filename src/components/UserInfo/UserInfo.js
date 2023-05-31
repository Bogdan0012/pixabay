

import './UserInfo.css';

const UserInfo = ({ item }) => {
    if(!item) return null;

    return (
        <div className="user-info">
            <div className="user-info__avatar" style={{ backgroundImage: `url(${(item.userImageURL && item.userImageURL.length > 0) ? item.userImageURL :  '/images/icons8-avatar-100.png'})`}}></div>
            <div className="user-info__username">{ item.user }</div>
        </div>
    );
}

export default UserInfo;