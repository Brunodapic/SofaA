import { useRouter } from 'next/router'
import { Button } from '../../components/Button'
import { BasicEvent } from '../../model/Event'
import * as S from './styles'
import { api } from '../../util/fetch'
import UniqueTournamentLink from '../Link/UniqueTournamentLink'
import useSWR from 'swr'
import { group } from 'console'

export default function SingleEventsPage({ event }: { event: BasicEvent }) {


    const { data, error } = useSWR<any>(`${api}/event/${event.id}/statistics`, {
        revalidateIfStale: false,
        revalidateOnFocus: false,
        revalidateOnReconnect: false,
    })



    const myLoader = (id: any) => {
        return `${api}/team/${id.src}/image`
    }

    function getDate(timestamp: any) {
        var t = new Date(timestamp * 1000);
        return (t.toLocaleDateString('en-GB'));
    }
    const router = useRouter()

    ///team/{teamID}/image
    return (
        <>
            <Button onClick={() => router.push('/')}>INDEX</Button>

            <S.EventsMainDiv>



                <S.EventCard key={event.customId + event.id}  >
                    {event.tournament.uniqueTournament ?

                        <S.EventLinkTo><UniqueTournamentLink uniqueTournament={event.tournament.uniqueTournament} /></S.EventLinkTo>


                        :
                        <S.EventName>{event.id}</S.EventName>

                    }

                    <S.EventCardElement>{event.homeTeam.name}</S.EventCardElement>
                    <S.EventCardElement>{event.awayTeam.name}</S.EventCardElement>

                    <S.EventCardElement>
                        <S.TeamImage
                            onClick={() => router.push(`/team/${event.homeTeam.slug}/${event.homeTeam.id}/`)}
                            loader={myLoader}
                            id={event.homeTeam.id.toString()}
                            alt="Picture of the author"
                            src={event.homeTeam.id.toString()}
                            width={120}
                            height={120}
                        />
                    </S.EventCardElement>
                    <S.EventCardElement>
                        <S.TeamImage
                            onClick={() => router.push(`/team/${event.awayTeam.slug}/${event.awayTeam.id}/`)}
                            loader={myLoader}
                            id={event.awayTeam.id.toString()}
                            alt="Picture of the author"
                            src={event.awayTeam.id.toString()}
                            width={120}
                            height={120}
                        />
                    </S.EventCardElement>
                    {event.winnerCode == 3 || event.winnerCode == 0 ?

                        <>
                            {event.winnerCode == 3 ?
                                <S.EventName>DRAW</S.EventName>
                                :
                                <S.EventName>NOT YET PLAYED</S.EventName>
                            }
                        </>
                        :
                        <>
                            {event.winnerCode == 1 ?
                                <>
                                    <S.EventCardElement>WINNER</S.EventCardElement>
                                    <S.EventCardElement>LOSER</S.EventCardElement>
                                </>
                                :
                                <>
                                    <S.EventCardElement>LOSER</S.EventCardElement>
                                    <S.EventCardElement>WINNER</S.EventCardElement>
                                </>
                            }
                        </>

                    }


                    <S.EventCardElement>Date:</S.EventCardElement>
                    <S.EventCardElement>{getDate(event.startTimestamp)}</S.EventCardElement>

                    <S.EventCardElement>{event.homeScore.display}</S.EventCardElement>
                    <S.EventCardElement>{event.awayScore.display}</S.EventCardElement>
                    <S.EventName>More data:</S.EventName>
                    {data == undefined || data.hasOwnProperty('error') ?
                        <>no more data</> :
                        <S.DataDiv>
                            {data.statistics[0].groups.map((group: any) => {

                                return (<S.DataDivElement key={group.groupName}>
                                    <h3>{group.groupName}:</h3>
                                    <S.GroupDiv>
                                        {group.statisticsItems.map((item: any) => {

                                            return (
                                                <S.GroupDivElement key={item.name}>
                                                    <div> <h4>{item.home}</h4></div>
                                                    <div><h4>{item.name}</h4></div>
                                                    <div><h4>{item.away}</h4></div>
                                                </S.GroupDivElement>
                                            )
                                        })}

                                    </S.GroupDiv>
                                </S.DataDivElement>)
                            })}

                        </S.DataDiv>

                    }

                </S.EventCard>



            </S.EventsMainDiv>
        </>

    )
}
