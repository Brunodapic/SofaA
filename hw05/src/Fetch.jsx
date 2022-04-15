import React, { useEffect, useState } from "react";

const getPokemonUrl = (id) => `https://pokeapi.co/api/v2/pokemon/${id}/`

export default function Fetcher() {

    const [pokId, setPokId] = useState(1)
    const [pokemonName, setPokemonName] = useState('')
    // your task here is to fetch Pokemon from a given URL and just display is name
    // once a Pokemon is fetched, increment your id to fetch the next one on click

    // fetch one Pokemon data when this component in rendered

    // return 2 elements:
    // 1st: a button which will trigger another fetch on click, for a Pokemon with next id
    // 2nd: Pokemons

    const addPokemon = () => {
        //ovaj dio je kako se nebi spamao fetch button, jer onda bi teoretski moglo doći do duplog zapisa
        //ovako dok se fetch ne zavrsi on ne radi
        const button = document.getElementById("button")
        button.disable=true
        fetch(getPokemonUrl(pokId))
            .then(response => {
                if (response.status === 200) {
                    response.json().then(decodedData => {
                        console.log('Decoded response', decodedData)
                        console.log(decodedData.name.toUpperCase())
                        setPokemonName(decodedData.name.toUpperCase())

                    })
                } else {
                    console.log('Response status code is not OK!')
                }
            })
            .catch(console.error)
            .finally(() => {
                //mislim da ih ima 20 pa ponocu mod-a (%) osiguravam da je id uvijek između 1 i 20
                setPokId((pokId + 1) % 19 + 1)
                button.disable=false
            })
    }

    useEffect(() => {
        if (pokemonName!=''){
        const list = document.getElementById("list")
        list.innerHTML += `<li>
                        <p>${pokemonName}</p>
                        </li>
                       `;
        }
    }, [pokemonName])

    return (
        <div>
            <button id="button" onClick={(event) => { addPokemon() }}>FETCH</button>
            <ul id="list">
            </ul>
        </div>
    )
}