import router, { useRouter } from 'next/router'
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
import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'


export default function EventListPart({ id }: { id: any }) {

    const { notification, setNotification } = useNotification()


    const { data, error } = useSWRImmutable<any>(`${api}/event/${id}`, {
        revalidateOnFocus: true,
        revalidateOnMount: true,
        revalidateOnReconnect: true,
        refreshWhenOffline: true,
        refreshWhenHidden: true,
        refreshInterval: 0,
    })


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
        //setNotification(notification?.filter(item => item !== id));
        /*var note = JSON.parse(localStorage.getItem("notification")!)
        var filteredArray = note.filter((e: any) => e !== id)
        localStorage.setItem("notification", JSON.stringify(filteredArray));*/
    };

    return (
        <>

            <S.EventElementDiv >
                <div onClick={() => router.push(`/event/${id}`)}>

                    <div><h3>{data?.event?.homeTeam.name}</h3></div>
                    <div><h3> VS </h3></div>
                    <div><h3>{data?.event?.awayTeam.name}</h3></div>
                    <div><h3>{getDate(data?.event?.startTimestamp)}</h3></div>
                </div>
                <div>
                    <Button onClick={() => handleRemoveItem(id)}>no</Button>
                </div>
            </S.EventElementDiv>

        </>
    );
}