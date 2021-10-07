import { useContext } from 'react'
import { CharactersContext } from '../../hooks/CharactersContext'
import '../../pages/characters/styles.css'
// import { api } from '../../services/api'
import '../../styles/global.css'

import Image from '../../components/image'

// import Image from '../../components/image'

export function CharactersDetails(){
    const data = useContext(CharactersContext) 
    console.log(data.character)
    return (
        <>
            <Image image={data.character.thumbnail}/>
            <span>{data.character.name}</span>
            <p>{data.character.description}</p>
        </>
    )
}






//api.get(`characters/${id}`)