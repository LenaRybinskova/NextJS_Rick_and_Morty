import {HeadMeta} from '@/components/HeadMeta/HeadMeta';
import {getLayout} from '@/components/Layout/Layout';
import {CharacterCard} from '@/components/CharacterCard/CharacterCard';
import {useCharacter} from '@/assets/hooks/useCharacter';



function Character() {
    const character = useCharacter()

    return (
        <>
            <HeadMeta title={'Character'}/>
            {character && <CharacterCard char={character}/>}
        </>
    );
}

Character.getLayout = getLayout
export default Character;