import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ImageCard from "../components/ImageCard/ImageCard";
import ImageSearch from "../components/ImageSearch";
import { getAsync as getImages, selectValues as selectImages } from '../Slices/ImageSlice';
import { getAsync as getVideo, selectValues as selectVideo } from '../Slices/VideoSlice';

import './Index.css';
import VideoCard from "../components/VideoCard/VideoCard";

const Index = () => {
    const images = useSelector(selectImages);
    const video = useSelector(selectVideo);
    const dispatch = useDispatch();

    const [items, setItems] = useState(null);
    const [type, setType] = useState("0");

    const [hondaAlert, setHondaAlert] = useState(false);
    const [bmwAlert, setBMWAlert] = useState(false);

    useEffect(() => {
        getRandomItems(images);
    }, [images]);

    useEffect(() => {
        getRandomItems(video);
    }, [video]);

    const getRandomItems = (values) => {
        if(!values) {
            setItems(null);
            return;
        }
        if(values.length <= 3) {
            setItems([...values]);
        } else {
            const idx = [];
            const tmp = [];
            const length = values.length;
            while(idx.length < 3) {
                const i = Math.floor(Math.random() * length);
                if(!idx.includes(i)) {
                    idx.push(i);
                    tmp.push(values[i]);
                }
            }

            setItems([...tmp]);
        }
    }

    const handleSearch = async (item) => {
        if(!item || !item.type || !item.txt) return;

        if(item.txt.toLowerCase().includes('honda') || item.txt.toLowerCase().includes('хонда')) {
            item.txt = "bmw";
            await loadItems(item);
            setHondaAlert(true);
            return;
        } else {
            setHondaAlert(false);
        }
        
        if(item.txt.toLowerCase().includes('bmw') || item.txt.toLowerCase().includes('бмв')) {
            item.txt = "honda";
            await loadItems(item);
            setBMWAlert(true);
            return;
        } else {
            setBMWAlert(false);
        }

        await loadItems(item);
    }

    const loadItems = async (item) => { 
        if(item.type === "0") {
            await dispatch(getImages(item.txt));
        } else if(item.type === "1") {
            await dispatch(getVideo(item.txt));
        }

        setType(item.type);
    }

    return (
        <div className="container">
            <h1 className="brand__title">Finding pictures</h1>
            <ImageSearch onClick={ handleSearch } />
            { hondaAlert && <p className="text-error">Only BMW!</p> }
            { bmwAlert && <p className="text-error">Only Honda!</p> }
            { items && items.length === 0 && <p className="text-error">Not found</p> }
            <div className="result__container">
                { type === "0" && 
                    items && items.length > 0 ? items.map((item, idx) => <ImageCard key={ idx } item={ item } />) : '' 
                }
                { type === "1" && 
                    items && items.length > 0 ? items.map((item, idx) => <VideoCard key={ idx } item={ item } />) : '' 
                }
            </div>
        </div>
    );
}

export default Index;