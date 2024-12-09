import Head from "next/head";
import {useCharacters} from '@/assets/hooks/useCharacters';
import {CharacterCard} from '@/components/CharacterCard/CharacterCard';
import styles from "@/styles/Home.module.css";
import {HeadMeta} from '@/components/HeadMeta/HeadMeta';


export default function Characters() {
const characters = useCharacters()

  return (
    <>
        <HeadMeta title={"Characters"}/>
        <main className={styles.main}>
            {characters &&  characters.map(char =>(
                <CharacterCard key={char.id} char={char}/>
            ))}
        </main>
    </>
  );
}
