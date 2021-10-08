import { useContext } from 'react'
import { CharactersContext } from '../../hooks/CharactersContext'
import '../../pages/characters/styles.css'
// import { api } from '../../services/api'
import '../../styles/global.css'

import Image from '../../components/image'
import hash from '../../services/hash'


export function CharactersDetails(){
    const { character } = useContext(CharactersContext);
      
    return (
        <>
            <Image image={character.thumbnail}/>
            <span>{character.name}</span>
            <p>{character.description}</p>
            <h3>COMICS</h3>
            {character.comics.items.map((item) =>{
                return(
                    <>
                    <p key={item.name}>{item.name}</p>
                    </>
                )
            })}
            <h3>SERIES</h3>
            {character.series.items.map((item) =>{
                return(
                    <>
                    <p key={item.name}>{item.name}</p>
                    </>
                )
            })}
            <h3>STORIES</h3>
            {character.stories.items.map((item) =>{
                return(
                    <>
                    <p key={item.name} >{item.name}</p>
                    </>
                )
            })}
        </>
    )
}






//api.get(`characters/${id}`)