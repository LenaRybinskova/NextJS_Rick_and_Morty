import Image from 'next/image';
import {Character} from '@/assets/hooks/useCharacters';
import styles from "./CharacterCard.module.scss"

type Props={
    char:Character
}


export const CharacterCard=({char}:Props)=>{
    return (
        <div className={styles.card}>
            <div>{char.name}</div>
            <Image src={char.image} alt={`picture of ${char.name}`} width={300} height={300}/>
        </div>
    )
}