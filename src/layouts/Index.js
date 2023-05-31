import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ImageCard from "../components/ImageCard/ImageCard";
import ImageSearch from "../components/ImageSearch";
import { selectValues } from "../Slices/ImageSlice";

import './Index.css';

const Index = () => {
    const values = useSelector(selectValues);

    const [items, setItems] = useState(null);

    useEffect(() => {
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
    }, [values]);

    return (
        <div className="container">
            <h1 className="brand__title">Finding pictures</h1>
            <ImageSearch />
            { items && items.length === 0 && <p className="text-error">Not found</p> }
            <div className="result__container">
                { items && items.length > 0 ? items.map((item, idx) => <ImageCard key={ idx } item={ item } />) : '' }
            </div>
        </div>
    );
}

export default Index;