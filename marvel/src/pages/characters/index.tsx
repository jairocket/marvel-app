import '../../pages/characters/styles.css'
import '../../styles/global.css'

import { useEffect, useState } from 'react'

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

    const [characters, setCharacters] = useState<CharacterResponseProps[]>([])

    useEffect(()=>{
        fetch(api+'/characters'+hash)
        .then(res => res.json())
        .then(res=> setCharacters(res.data.results))
    },[])

    // if(!characters) return null


    return(

        <div className='characters'>
            {characters.map((item)=>
                <div className='characters-character'>
                    <h1>{item.name}</h1>
                    <Image image={item.thumbnail}/>
                </div>
            )}
        </div>
        
    )
}

export default Characters;