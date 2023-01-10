import React from "react";
import { useEffect } from "react";
import data from "../data.json";

const MangaYofukashiNoUta = () => {
    console.log(data[0]);

    const [manga, setManga] = React.useState(data[0]);

    const updateManga = () => {
        if (manga === data[1]) {
            setManga(data[0]);
        } else {
        }
    };

    useEffect(() => {
        const interval = setInterval(() => {
            updateManga();
        }, 10000);
        return () => clearInterval(interval);
    }, []);

    return <div></div>;
};

export default MangaYofukashiNoUta;
