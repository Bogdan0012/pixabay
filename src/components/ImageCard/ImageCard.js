

import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Likes from '../Likes/Likes';
import UserInfo from '../UserInfo/UserInfo';
import './ImageCard.css';

const ImageCard = ({ item }) => {
    const [isCollapsed, setIsCollapsed] = useState(true);

    useEffect(() => {
        setIsCollapsed(true);
        if(!item || !item.largeImageURL) return;
        const timer = setTimeout(() => {
            setIsCollapsed(false);
          }, 200);
          return () => clearTimeout(timer);
    }, [item]);

    if(!item) return null;

    return (
        <div className={ `image-card__container ${ isCollapsed ? 'image-card__collapsed' : 'image-card__expanded' }` }>
            <a href={ item.largeImageURL } target="_blank"><div className={ `image-card ${ isCollapsed ? 'image-card__collapsed' : 'image-card__expanded' }` } style={{ backgroundImage: `url(${ item.largeImageURL })`}}></div></a>
            <Link to={`/user/${ item.user }`}><UserInfo item={ item } /></Link>
            <Likes likes={ item.likes } />
        </div>
    );
}

export default ImageCard;