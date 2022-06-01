import Link from 'next/link'
import React from 'react'
import { UniqueTournament } from '../../model/Tournament'

interface P {
  uniqueTournament: UniqueTournament
}

export default function UniqueTournamentLink({uniqueTournament}: React.PropsWithChildren<P>) {
  return (
    <Link 
      href={{pathname: '/unique-tournament/'+uniqueTournament.id}}
      style={{cursor:'pointer'}}
      >
        <h1>{uniqueTournament.name}</h1>
    </Link>
  )
}
