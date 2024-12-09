import {useCharacters} from '@/assets/hooks/useCharacters';
import {CharacterCard} from '@/components/CharacterCard/CharacterCard';
import {HeadMeta} from '@/components/HeadMeta/HeadMeta';
import {getLayout} from '@/components/Layout/Layout';
import Link from 'next/link';


function Characters() {
    const characters = useCharacters()

    return (
        <>
            <HeadMeta title={'Characters'}/>
                {characters && characters.map(char => (
                    <Link href={`/characters/${char.id}`} key={char.id} >
                        {<CharacterCard char={char}/>}
                    </Link>
                ))}
        </>
    );
}

Characters.getLayout=getLayout
export default Characters;
