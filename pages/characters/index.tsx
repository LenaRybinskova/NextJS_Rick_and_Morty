import {useCharacters} from '@/assets/hooks/useCharacters';
import {CharacterCard} from '@/components/CharacterCard/CharacterCard';
import {HeadMeta} from '@/components/HeadMeta/HeadMeta';
import {getLayout} from '@/components/Layout/Layout';


function Characters() {
    const characters = useCharacters()

    return (
        <>
            <HeadMeta title={'Characters'}/>
{/*            <main className={`${styles.main}`}>*/}
{/*                <Navbar/>*/}
                {characters && characters.map(char => (
                    <CharacterCard key={char.id} char={char}/>
                ))}
{/*            </main>*/}
        </>
    );
}

Characters.getLayout=getLayout
export default Characters;
