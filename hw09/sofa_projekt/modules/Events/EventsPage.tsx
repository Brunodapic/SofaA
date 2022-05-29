import { useRouter } from 'next/router'
import { Button } from '../../components/Button'
import { BasicEvent } from '../../model/Event'
import * as S from './styles'
import CategoryLink from '../Link/CategoryLink'
import { getTeamImage } from '../../util/fetch'
import Image from 'next/image'
import { api } from '../../util/fetch'
import useSWR from 'swr'

export default function EventsPage({ events }: { events: Array<BasicEvent> }) {

    const myLoader = (id: any) => {
        return `${api}/team/${id.src}/image`
    }

    function getDate(timestamp: any) {
        var t = new Date(timestamp * 1000);
        return (t.toLocaleDateString('en-GB'));
    }

    


    const router = useRouter()
    console.log(events)
    ///team/{teamID}/image
    return (
        <>
            <Button onClick={() => router.push('/')}>INDEX</Button>

            <S.EventsMainDiv>

                {events.map(event => {
                    return (

                        <S.EventCard key={event.customId + event.id}>
                            <S.EventName>{event.tournament.name}</S.EventName>

                            <S.EventCardElement>{event.awayTeam.name}</S.EventCardElement>
                            <S.EventCardElement>{event.homeTeam.name}</S.EventCardElement>

                            <S.EventCardElement>
                            <S.TeamImage
                                loader={myLoader}
                                id={event.awayTeam.id.toString()}
                                alt="Picture of the author"
                                src={event.awayTeam.id.toString()} 
                                width={120}
                                height={120}
                                />
                            </S.EventCardElement>
                            <S.EventCardElement>
                            <S.TeamImage
                                loader={myLoader}
                                id={event.homeTeam.id.toString()}
                                alt="Picture of the author"
                                src={event.homeTeam.id.toString()} 
                                width={120}
                                height={120}
                                />
                            </S.EventCardElement>
                            <S.EventCardElement>{(event.awayTeam.id)}</S.EventCardElement>
                            <S.EventCardElement>{event.homeTeam.id}</S.EventCardElement>

                            <S.EventCardElement>Date:</S.EventCardElement>
                            <S.EventCardElement>{getDate(event.startTimestamp)}</S.EventCardElement>

                            <S.EventCardElement>{event.awayScore.display}</S.EventCardElement>
                            <S.EventCardElement>{event.homeScore.display}</S.EventCardElement>

                        </S.EventCard>

                    )
                })}
            </S.EventsMainDiv>
        </>

    )
}