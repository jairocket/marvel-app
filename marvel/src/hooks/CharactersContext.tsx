import { createContext, ReactNode, useState } from "react";
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
            colectionURI: string;
            items: item[];
        };
        series: {
            available: number;
            colectionURI: string;
            items: item[];
        };
        stories:{
            available: number;
            colectionURI: string;
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
    getCharacter:(characterId: number)=> Promise<void>
}

export const CharactersContext = createContext<CharactersContextData>({} as CharactersContextData);

export function CharactersProvider({children}: CharactersProviderProps){
    const [character, setCharacter] = useState<character>({} as character);


    const getCharacter = async(characterId: number)=>{
        const {data} = await api.get(`characters/${characterId}?${hash}`)
        setCharacter(data.data.results[0])
    }

    return(
        <CharactersContext.Provider value={
            {character, getCharacter}
        }>
            {children}
        </CharactersContext.Provider>
    )
}




        