import '../../pages/characters/styles.css'
import '../../styles/global.css'

import { useEffect, useState, useRef, useCallback } from 'react'

import api from "../../services/api"
import hash from '../../services/hash'

import Image from '../../components/image'

interface CharacterResponseProps{
    name: string;
    thumbnail: {
        path: string;
        extension: string;
    };
}

function Characters(){

    const [characters, setCharacters] = useState<CharacterResponseProps[]>([]);
    const [offset, setOffset] = useState(0);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [hasmore, setHasMore] = useState(false);
    const observer = useRef()

    useEffect(()=>{
        setLoading(true);
        setError(false);
        fetch(`${api}/characters?limit=20&${hash}&offset=${offset}`)
        .then(res => res.json())
        .then(res=> {
            setCharacters([...characters, ...res.data.results]);
            setHasMore(res.data.results.length > 0);
            setLoading(false);
        })
    },[offset]);


    return(

        <div className='characters'>
            {characters.map((item)=>
                <div className='characters-character' key={item.name}>
                    <h1>{item.name}</h1>
                    <Image image={item.thumbnail}/>
                </div>
            )}
            <div>{loading && 'Loading...'}</div>
            <div>{error && 'Error'}</div>
        </div>
        
    )
}

export default Characters;