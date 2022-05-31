import React from 'react'
import useSWR from 'swr'
import { UniqueTournament } from '../../model/Tournament'
import { api } from '../../util/fetch'

interface EventsResponse {
    uniqueTournament: UniqueTournament
}


export default function GeuniqueTournamentIDname({ uniqueTournamentID }: { uniqueTournamentID: number }) {

    const { data, error } = useSWR<EventsResponse>(`${api}/unique-tournament/${uniqueTournamentID}`)


    console.log(data)
    if (error) {
        return null
    }
    if (!data) {
        return <div>Loading</div>
    }
    console.log(data.uniqueTournament.name)
    return (<div>{data.uniqueTournament.name}</div>)
}