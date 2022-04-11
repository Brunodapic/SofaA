import React, { useEffect, useState } from "react";

const getPokemonUrl = (id) => `https://pokeapi.co/api/v2/pokemon/${id}/`

export default function Fetcher() {

    const [pokId, setPokId] = useState(1)
    // your task here is to fetch Pokemon from a given URL and just display is name
    // once a Pokemon is fetched, increment your id to fetch the next one on click

    // fetch one Pokemon data when this component in rendered
    console.log(getPokemonUrl(1)) // delete this, only reason to log it is so linter doesn't cry before any code is written

    // return 2 elements:
    // 1st: a button which will trigger another fetch on click, for a Pokemon with next id
    // 2nd: Pokemons

    const addPokemon = () => {

        fetch(getPokemonUrl(pokId))
            .then(response => {
                console.log('Response', { response })
                if (response.status === 200) {
                    response.json().then(decodedData => {
                        console.log('Decoded response', decodedData)
                        const p = document.getElementById("list")
                        console.log(decodedData.name.toUpperCase())
                        p.innerHTML += `<li>
                                        <p>${decodedData.name.toUpperCase()}</p>
                                        </li>
                                    `;
                    })
                } else {
                    console.log('Response status code is not OK!')
                }
            })
            .catch(console.error)
            .finally(() => {
                console.log('Fetch finished!')
                setPokId((pokId + 1) % 19 + 1)
                //mislim da ih ima 20 pa ponocu mod-a (%) osiguravam da je id uvijek između 1 i 20
            })
    }

    React.useEffect(() => {
        addPokemon()
      }, [])

    return (
        <div>
            <button onClick={(event)=>{addPokemon()}}>FETCH</button>
            <ul id="list">
            </ul>
        </div>
    )
}