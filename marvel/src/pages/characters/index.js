
import { useEffect, useState } from 'react'

import api from "../../services/api"
import hash from '../../services/hash'

import Image from '../../components/image'

function Characters(){

    const [characters, setCharacters] = useState([])

    function getCharacters(){
        fetch(api+'/characters'+hash)
        .then(res => res.json())
        .then(res => setCharacters(res.data.results))   
    }

    useEffect(()=>{
        setCharacters(getCharacters)
    },[]) 

    if(!characters) return null

    console.log(characters)

    return(

        <div>
            {characters.map((item, i)=>
                <div>
                <h1 key={i}>{item.name}</h1>
                <Image key={i} image={item.thumbnail}/>
                </div>
            )}
        </div>
        
    )
}

export default Characters;