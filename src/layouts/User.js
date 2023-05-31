import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import ImageCard from "../components/ImageCard/ImageCard";

import { getByUserAsync, selectValues } from '../Slices/ImageSlice';

import './User.css';

const User = () => {
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
                        <div className="user__image__container">
                            <img src={ values[0].userImageURL ?? '/images/icons8-avatar-100.png' } alt={ values[0].user } />
                            <p>{ values[0].user }</p>
                        </div>
                        <div className="user__images">
                            { values.map((item, idx) => 
                            <div className="user__images__container" key={ idx }>
                                <img src={ item.largeImageURL } alt="image" className="image" />
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

export default User;