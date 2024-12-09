import {useEffect, useState} from 'react';
import axios from 'axios';
import {Nullable} from 'assets/hooks/types';


export type Character ={
    id:number
    name:string
    image:string
}

export const useCharacters=():Nullable<Character[]>=>{
    const [characters, setCharacters]=useState<Nullable<Character[]>>(null)

    useEffect(()=>{
        axios.get(`${process.env.NEXT_PUBLIC_RICK_AND_MORTY_API_URL}/character`).then(res =>setCharacters(res.data.results) )
    }, [])

    return characters;
}