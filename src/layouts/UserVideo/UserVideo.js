import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import Likes from "../../components/Likes/Likes";

import { getByUserAsync, selectValues } from '../../Slices/VideoSlice';

import './UserVideo.css';

const UserVideo = () => {
    const params = useParams();

    const values = useSelector(selectValues);
    const dispatch = useDispatch();

    useEffect(() => {
        if(params && params.username) {
            dispatch(getByUserAsync(params.username));
        }
    }, [params]);


    return (
        <div>
            <a href="/"><h1 className="brand__title">Finding pictures</h1></a>
            { values && values.length > 0 ? 
                <div className="container" style={{ maxWidth: '1200px'}}>
                    <div className="row">
                        <div className="user__video__container">
                            <img src={ values[0].userImageURL ?? '/images/icons8-avatar-100.png' } alt={ values[0].user } />
                            <p>{ values[0].user }</p>
                        </div>
                        <div className="user__videos">
                            { values.map((item, idx) => 
                                <div key={ idx } className='video-card__container video-card__expanded'>
                                    <video className='movie' width="400" height="300" controls="controls" poster="video/duel.jpg">
                                    { item.videos && item.videos.tiny && <source src={ item.videos.tiny.url} type='video/ogg; codecs="theora, vorbis"' /> }
                                    Тег video не поддерживается вашим браузером.
                                </video>
                                <Likes likes={ item.likes } />
                                { item.videos && item.videos.large && <a href={ item.videos.large.url } className='video__link' target="_blank">View</a>}
                            </div>
                            ) }
                        </div>
                    </div>
                </div>
            :
                <p className="error-txt">Not found</p>
            }
        </div>
    );
}

export default UserVideo;