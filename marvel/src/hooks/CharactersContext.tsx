import { createContext, ReactNode, SetStateAction, useEffect, useState } from "react";


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
    setCharacter: React.Dispatch<SetStateAction<character>>
    getCharacterId:(characterId: number)=> Promise<void>
    setCharacterId: React.Dispatch<SetStateAction<number>>
}

export const CharactersContext = createContext<CharactersContextData>({} as CharactersContextData);

export function CharactersProvider({children}: CharactersProviderProps){
    const [character, setCharacter] = useState<character>({} as character);
    const [characterId, setCharacterId] = useState(()=>{
        const storagedCharacterId = localStorage.getItem('wiki-marvel');
        if(storagedCharacterId) {
            return JSON.parse(storagedCharacterId)
        }else{
            return 1011334
        } 
    });  
    
    useEffect(()=>{
        localStorage.setItem('wiki-marvel', JSON.stringify(characterId))
    },[characterId])

    

    const getCharacterId = async(characterId: number)=>{
        setCharacterId(characterId)   
    }
    
    
    return(
        <CharactersContext.Provider value={
            {character, setCharacter, getCharacterId,  setCharacterId}
        }>
            {children}
        </CharactersContext.Provider>
    )
}




        