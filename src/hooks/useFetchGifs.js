import { useEffect, useState } from "react"
import { getGifs } from "../helpers/getGifs";


export const useFetchGifs = (category) => {
    const [state, setstate] = useState({
        data:[],
        loadding: true
    });

    useEffect(() => {
        getGifs(category).then(images => {
            setstate({
                data: images,
                loadding: false
            });
        });
        //empty dependenciesList to call getGifs once
    }, [category]);

    return state;
}