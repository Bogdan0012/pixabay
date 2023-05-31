

import './Search.css';
import icon from "./icons8-лупа-64.png";
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getAsync, reset } from '../../Slices/ImageSlice';


const Search = () => {
    const [txt, setTxt] = useState('');
    const dispatch = useDispatch();

    const [isValid, setIsValid] = useState(false);

    const handleBtnClick = async () => {
        if(isValid) {
            await dispatch(getAsync(txt));
        }
    }

    const handleInput = (e) => {
        setTxt(e.target.value);
        setIsValid(e.target.value.trim().length > 0);
    }

    const handleReset = async () => {
        setTxt('');
        setIsValid(false);
        await dispatch(reset());
    }
    return (
        <div>
            <div className='search__container'>
                <input type="text" className="search__input" value={ txt } onInput={ handleInput } />
                <div className='search__reset' onClick={ handleReset }>X</div>
            </div>
            <button className="search__btn" onClick={ handleBtnClick } disabled={ !isValid }><img src={ icon } alt="Search" className="search__btn-icon" /></button>
        </div>
    );
}

export default Search;