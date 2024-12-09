import {useEffect, useState} from 'react';
import axios from 'axios';
import {Nullable} from '@/assets/hooks/types';


export type Character ={
    id:number
    name:string
    image:string
}

export const useCharacters=():Nullable<Character[]>=>{
/*    const [characters, setCharacters]=useState<null | CharacterType[]>(null)*/
    const [characters, setCharacters]=useState<Nullable<Character[]>>(null)

    useEffect(()=>{
        axios.get("https://rickandmortyapi.com/api/character").then(res =>setCharacters(res.data.results) )
    }, [])

    return characters;
}