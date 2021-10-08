import '../../pages/characters/styles.css'
import '../../styles/global.css'

import { useEffect, useState, useRef, useCallback, useContext } from 'react'
import { useHistory } from 'react-router'
import { CharactersContext } from '../../hooks/CharactersContext'

import { api } from "../../services/api"
import hash from '../../services/hash'

import Image from '../../components/image'
import {Header} from '../../components/Header'


interface CharacterResponseProps{
    id: number;
    name: string;
    thumbnail: {
        path: string;
        extension: string;
    };
}

function Characters(){
    const history = useHistory()
    const {getCharacterId} = useContext(CharactersContext) 

    const [characters, setCharacters] = useState<CharacterResponseProps[]>([]);
    const [offset, setOffset] = useState(0);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [hasmore, setHasMore] = useState(false);
    const observer = useRef<IntersectionObserver>()

    const lastCharacterRef =useCallback(node =>{
        if(loading) return
        if(observer.current) observer.current.disconnect()
        observer.current = new IntersectionObserver(entries =>{
            if(entries[0].isIntersecting && hasmore){
                setOffset(offset => offset + 20)
            }
        })
        if(node) observer.current.observe(node)
    },[loading, hasmore])

    useEffect(()=>{
        setLoading(true);
        setError(false);
        api.get(`/characters?limit=20&${hash}&offset=${offset}`)
        .then(res=> {
            setCharacters(characters =>{
                return [...characters, ...res.data.data.results]
            });
            setHasMore(res.data.data.results.length > 0);
            setLoading(false);
        })
    },[offset]);


    return(
        <>
        <Header />
        <div className='characters'>
            {characters.map((item, index)=>{
                if(characters.length === index+1){
                    return (
                        <div ref={lastCharacterRef} className='characters-character' key={item.id}>
                            <h1>{item.name}</h1>
                            <button onClick={()=> history.push(`/character/${item.id}`)}>
                                <Image  image={item.thumbnail}/>
                            </button>   
                        </div>
                        )
                    }else{
                        return(
                            <div className='characters-character' key={item.name}>
                                <h1>{item.name}</h1>
                                <button onClick={async ()=> {
                                    await getCharacterId(item.id); 
                                    history.push(`/characters/${item.id}`)
                                }}>
                                    <Image image={item.thumbnail}/>
                                </button> 
                            </div>
                        )
                    }
                }
                
            )}
            <div>{loading && 'Loading...'}</div>
            <div>{error && 'Error'}</div>
        </div>
        </>
    )
}

export default Characters;