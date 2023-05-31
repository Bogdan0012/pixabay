

import './Search.css';
import icon from "./icons8-лупа-64.png";
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { reset as resetImages } from '../../Slices/ImageSlice';
import { reset as resetVideo } from '../../Slices/VideoSlice';


const Search = ({ onClick }) => {
    const [txt, setTxt] = useState('');
    const dispatch = useDispatch();

    const [isValid, setIsValid] = useState(false);
    const [type, setType] = useState("0");

    const handleBtnClick = () => {
        if(isValid) {
            onClick && onClick({
                type: type,
                txt: txt
            });
        }
    }

    const handleInput = (e) => {
        setTxt(e.target.value);
        setIsValid(e.target.value.trim().length > 0);
    }

    const handleReset = async () => {
        setTxt('');
        setIsValid(false);
        await dispatch(resetImages());
        await dispatch(resetVideo());
    }

    const handleTypeChange = (e) => {
        setType(e.target.value);
    }

    return (
        <div>
            <div className='search__container'>
                <input type="text" className="search__input" value={ txt } onInput={ handleInput } />
                <div className='search__reset' onClick={ handleReset }>X</div>
            </div>
            <div className='radio-container'>
                <div><input id="images" type="radio" name="type" value="0" defaultChecked onClick={ handleTypeChange } /> <label htmlFor='images' className='radio'>Images</label></div>
                <div><input id="video" type="radio" name="type" value="1" onClick={ handleTypeChange } /> <label htmlFor='video' className='radio'>Video</label></div>
            </div>
            <button className="search__btn" onClick={ handleBtnClick } disabled={ !isValid }><img src={ icon } alt="Search" className="search__btn-icon" /></button>
        </div>
    );
}

export default Search;