

import { useEffect, useState } from 'react';
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
        <div className={ `image-card ${ isCollapsed ? 'image-card__collapsed' : 'image-card__expanded' }` } style={{ backgroundImage: `url(${ item.largeImageURL })`}}></div>
        </div>
    );
}

export default ImageCard;