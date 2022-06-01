import { useRouter } from 'next/router'
import { Button } from '../../components/Button'
import { UniqueTournament } from '../../model/Tournament'
import Category from '../SportCategories/CategoryDetails'
import * as S from './styles'
import Image from 'next/image'
import { api } from '../../util/fetch'
import { TeamImage } from '../Events/styles'

export default function UniqueTournamentPage({ UniqueTournament }: { UniqueTournament: UniqueTournament }) {

  const router = useRouter()


  const myLoader = (id: any) => {
    return `${api}/unique-tournament/${id.src}/image`
  }
  const myLoaderClube = (id: any) => {
    return `${api}/team/${id.src}/image`
  }

  return (
    <>

      <h2>{UniqueTournament.name}</h2>
      <h2>{UniqueTournament.category.name}</h2>
      <TeamImage
        style={{ cursor: 'pointer' }}
        loader={myLoader}
        id={UniqueTournament.id.toString()}
        alt="Picture of the author"
        src={UniqueTournament.id.toString()}
        width={80}
        height={80}
      />


      {UniqueTournament.titleHolder ? //UniqueTournament.titleHolder moze biti undefined , pa da ne bude error
        <div>
          <h2>Title holder: {UniqueTournament.titleHolder.name}</h2>
          <TeamImage
            style={{ cursor: 'pointer' }}
            loader={myLoaderClube}
            id={UniqueTournament.titleHolder.id.toString()}
            alt="Picture of the author"
            src={UniqueTournament.titleHolder.id.toString()}
            width={80}
            height={80}
          />
        </div>
        :
        <></>
      }
    </>
  )
}
/*
uniqueTournament:
category: {name: 'England', slug: 'england', sport: {…}, id: 1, flag: 'england', …}
hasPlayoffSeries: false
hasPositionGraph: true
hasRounds: true
hasStandingsGroups: false
id: 17
linkedUniqueTournaments: []
logo: {md5: 'e214ba84c576323e3e70cc6098733f0c', id: 294210}
lowerDivisions: [{…}]
mostTitles: 20
mostTitlesTeams: [{…}]
name: "Premier League"
primaryColorHex: "#3c1c5a"
secondaryColorHex: "#f80158"
slug: "premier-league"
tier: 1
titleHolder: {name: 'Manchester City', slug: 'manchester-city', shortName: 'Man City', gender: 'M', sport: {…}, …}
titleHolderTitles: 6
upperDivisions: []
userCount: 1033418
*/