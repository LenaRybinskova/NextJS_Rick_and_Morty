import {useEffect, useState} from 'react';
import axios from 'axios';
import {Nullable} from '@/assets/hooks/types';
import {Character} from '@/assets/hooks/useCharacters';
import {useRouter} from 'next/router';


export const useCharacter = (): Nullable<Character> => {
    const [character, setCharacter] = useState<Nullable<Character>>(null)

    const router=useRouter()

    useEffect(() => {
        axios.get(`${process.env.NEXT_PUBLIC_RICK_AND_MORTY_API_URL}/character/${router.query.id}`).then(res => setCharacter(res.data))
    }, [])

    return character;
}