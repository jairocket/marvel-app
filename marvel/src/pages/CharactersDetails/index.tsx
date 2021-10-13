import { useEffect, useState } from 'react'

import '../../pages/CharactersDetails/styles.css'
import { api } from '../../services/api'
import '../../styles/global.css'

import Image from '../../components/image'

import hash from '../../services/hash'

interface item{
    resourceURI: string;
    name: string;
    type: string;
}

interface url{
    type: string;
    url: string;
}

interface character {
    
        id: number;
        name: string;
        description: string;
        thumbnail: {
            path: string;
            extension: string;
        };
        resourceURI: string;
        comics:{
            available: number;
            collectionURI: string;
            items: item[];
        };
        series: {
            available: number;
            collectionURI: string;
            items: item[];
        };
        stories:{
            available: number;
            collectionURI: string;
            items: item[];
        };
        events:{
            available: number;
            colectionURI: string;
            items: item[];
        };
        urls: url[];  

}

export function CharactersDetails(){
    const storagedCharacterId = localStorage.getItem('wiki-marvel')   
    const[character, setCharacter] = useState<character>()

    useEffect(()=>{
        if(storagedCharacterId){
            const charactersId = JSON.parse(storagedCharacterId)
            api.get(`characters/${charactersId}?${hash}`).then(
            data=> {
                setCharacter(data.data.data.results[0]);
            })
        }
    },[storagedCharacterId])    
   
    
    if(character){
        return (
            <>
                <Image image={character.thumbnail}/>
                <h3>{character.name}</h3>
                <p className="characters-data">{character.description}</p>
                <h3>Comics</h3>
                {character.comics.items.map((item) =>{
                    return(
                        <div key={item.name} className="characters-data">
                            <p>{item.name}</p>
                        </div>
                    )
                })}
                <h3>Series</h3>
                {character.series.items.map((item) =>{
                    return(
                        <div key={item.name} className="characters-data">
                            <p>{item.name}</p>
                        </div>
                    )
                })}
                <h3>Stories</h3>
                {character.stories.items.map((item) =>{
                    return(
                        <div key={item.name} className="characters-data">
                            <p>{item.name}</p>
                        </div>
                    )
                })}
            </>
        )

    }else{
        return <span>algo deu errado</span>
    }
   
    
}

