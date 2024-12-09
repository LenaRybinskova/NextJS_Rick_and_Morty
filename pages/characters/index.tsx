import {useCharacters} from '@/assets/hooks/useCharacters';
import {CharacterCard} from '@/components/CharacterCard/CharacterCard';
import styles from '@/styles/Home.module.css';
import {HeadMeta} from '@/components/HeadMeta/HeadMeta';
import {Navbar} from '@/components/Navbar/Navbar';
import {Inter} from 'next/dist/compiled/@next/font/dist/google';

// const inter = Inter({subsets:["latin"]})

export default function Characters() {
    const characters = useCharacters()

    return (
        <>
            <HeadMeta title={'Characters'}/>
            <main className={`${styles.main}`}>
                <Navbar/>
                {characters && characters.map(char => (
                    <CharacterCard key={char.id} char={char}/>
                ))}
            </main>
        </>
    );
}
