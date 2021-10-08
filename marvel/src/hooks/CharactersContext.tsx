import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "../services/api";
import  hash  from "../services/hash"

interface CharactersProviderProps{
    children: ReactNode;
}

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

interface CharactersContextData{
    character: character;
    getCharacterId:(characterId: number)=> Promise<void>
}

export const CharactersContext = createContext<CharactersContextData>({} as CharactersContextData);

export function CharactersProvider({children}: CharactersProviderProps){
    const [character, setCharacter] = useState<character>({} as character);
    const [characterId, setCharacterId] =useState(1011334);

    useEffect(()=>{
        api.get(`characters/${characterId}?${hash}`).then(
            data=> setCharacter(data.data.data.results[0])

        )
        // setCharacter(data.data.results[0])
    },[characterId])

    const getCharacterId = async(characterId: number)=>{
        setCharacterId(characterId)
        
    }
    console.log(character)
    return(
        <CharactersContext.Provider value={
            {character, getCharacterId}
        }>
            {children}
        </CharactersContext.Provider>
    )
}




        