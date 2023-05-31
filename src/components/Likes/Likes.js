
import './Likes.css';

const Likes = ({ likes }) => {
    if(!likes) return null;

    return (
        <div className="likes">{ likes } likes</div>
    );
}

export default Likes;