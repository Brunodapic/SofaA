import { useRouter } from 'next/router'
import { Button } from '../../components/Button'
import { BasicEvent } from '../../model/Event'
import * as S from './styles'
import { api } from '../../util/fetch'
import UniqueTournamentLink from '../Link/UniqueTournamentLink'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { useNotification } from '../../context/NotificationContext'
import { BellIcon } from '../../components/Bell'
import { useDarkMode } from '../../context/DarkModeContext'


export default function EventsPage({ events }: { events: Array<BasicEvent> }) {

    const { notification, setNotification } = useNotification()
    const { darkMode } = useDarkMode()

    /*useEffect(() => {
        // window is accessible here.
        console.log('update')
    }, [notification]);*/

    const myLoader = (id: any) => {
        return `${api}/team/${id.src}/image`
    }

    function getDate(timestamp: any) {
        var t = new Date(timestamp * 1000);
        return (t.toLocaleDateString('en-GB'));
    }

    const addToNotification = (id: number) => {

        //redundanto ali zasto ne
        if (notification?.includes(id)) {
            console.log("allredy in")
        }
        else {
            setNotification((ids: any) => [
                ...ids,
                id
            ])
        }
    }
    const handleRemoveItem = (id: any) => {

        setNotification(notification?.filter(item => item !== id));
    };

    function removeItem<T>(arr: Array<T>, value: T): Array<T> {
        const index = arr.indexOf(value);
        if (index > -1) {
            arr.splice(index, 1);
        }
        return arr;
    }

    const router = useRouter()

    //console.log(stored)



    return (
        <>
            <Button onClick={() => router.push('/')}>INDEX</Button>

            <S.EventsMainDiv>

                {events.map(event => {
                    return (

                        <S.EventCard key={event.customId + event.id}  >
                            {event.tournament.uniqueTournament ?

                                <S.EventLinkTo><UniqueTournamentLink uniqueTournament={event.tournament.uniqueTournament} /></S.EventLinkTo>


                                :
                                <S.EventName>{event.id}</S.EventName>

                            }

                            <S.EventCardElement>{event.awayTeam.name}</S.EventCardElement>
                            <S.EventCardElement>{event.homeTeam.name}</S.EventCardElement>

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
                                            <S.EventCardElement>LOSER</S.EventCardElement>
                                            <S.EventCardElement>WINNER</S.EventCardElement>
                                        </>
                                        :
                                        <>
                                            <S.EventCardElement>WINNER</S.EventCardElement>
                                            <S.EventCardElement>LOSER</S.EventCardElement>

                                        </>
                                    }
                                </>

                            }


                            <S.EventCardElement>Date:</S.EventCardElement>
                            <S.EventCardElement>{getDate(event.startTimestamp)}</S.EventCardElement>

                            <S.EventCardElement>{event.awayScore.display}</S.EventCardElement>
                            <S.EventCardElement>{event.homeScore.display}</S.EventCardElement>
                            {notification?.includes(event.id) ?
                                <div>
                                    <BellIcon
                                        src={!darkMode ? '/static/images/ring_dark.png' : '/static/images/ring.png'}
                                        width={20}
                                        height={20}
                                        onClick={() => handleRemoveItem(event.id)}
                                    />
                                </div>
                                :
                                <div>
                                    <BellIcon
                                        src={!darkMode ? '/static/images/dark_bell.png' : '/static/images/bell.png'}
                                        width={20}
                                        height={20}
                                        onClick={() => addToNotification(event.id)}
                                    />
                                </div>
                            }
                            <S.MoreInfo onClick={() => router.push(`/event/${event.id}`)}>MORE INFO</S.MoreInfo>
                        </S.EventCard>

                    )
                })}
            </S.EventsMainDiv>
        </>

    )
}
