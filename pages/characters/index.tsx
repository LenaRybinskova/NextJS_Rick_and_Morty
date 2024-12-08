import Head from "next/head";
import Image from "next/image";
import {useEffect, useState} from 'react';
import axios from 'axios';


export default function Characters() {
const [characters, setCharacters]=useState<null | CharacterType[]>(null)

    useEffect(()=>{
axios.get("https://rickandmortyapi.com/api/character").then(res =>setCharacters(res.data.results) )

    }, [])

  return (
    <>


      <Head>
        <title>LENA Characters</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <main>
            {characters &&  characters.map(ch =>(
                <div key={ch.id}>
                    <div>{ch.name}</div>
                    <Image src={ch.image} alt={`picture of ${ch.name}`} width={300} height={300}/>
                </div>
            ))}
        </main>
    </>
  );
}

//type
type CharacterType={
    id:number
    name:string
    image:string
}
