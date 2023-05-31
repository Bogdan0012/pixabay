
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Likes from '../Likes/Likes';
import UserInfo from '../UserInfo/UserInfo';
import './VideoCard.css';

const VideoCard = ({ item }) => {
    const [isCollapsed, setIsCollapsed] = useState(true);

    useEffect(() => {
        setIsCollapsed(true);
        if(!item || !item.videos || !item.videos.tiny) return;
        const timer = setTimeout(() => {
            setIsCollapsed(false);
          }, 200);
          return () => clearTimeout(timer);
    }, [item]);

    if(!item) return null;
    return (
        <div className={ `video-card__container ${ isCollapsed ? 'video-card__collapsed' : 'video-card__expanded' }` }>
            <video className='movie' width="400" height="300" controls="controls" poster="video/duel.jpg">
                { item.videos && item.videos.tiny && <source src={ item.videos.tiny.url} type='video/ogg; codecs="theora, vorbis"' /> }
                Тег video не поддерживается вашим браузером.
            </video>
            <Link to={`/user/videos/${ item.user }`}><UserInfo item={ item } /></Link>
            <Likes likes={ item.likes } />
            { item.videos && item.videos.large && <a href={ item.videos.large.url } className='video__link' target="_blank">View</a>}
        </div>
    );
}

export default VideoCard;