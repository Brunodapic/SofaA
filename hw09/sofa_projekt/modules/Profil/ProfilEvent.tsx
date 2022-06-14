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
import EventListPart from './EventListPart'


export default function ProfileEvent() {

    const { notification, setNotification } = useNotification()


    function getData(id: number) {
        const { data, error } = useSWRImmutable<any>(`${api}/event/${id}`, {
            revalidateOnFocus: true,
            revalidateOnMount: true,
            revalidateOnReconnect: true,
            refreshWhenOffline: true,
            refreshWhenHidden: true,
            refreshInterval: 0,
        })
        return data
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
        /*var note = JSON.parse(localStorage.getItem("notification")!)
        var filteredArray = note.filter((e: any) => e !== id)
        localStorage.setItem("notification", JSON.stringify(filteredArray));*/
    };

    return (
        <>
            <h1 style={{ padding: '5px' }}>User name: User</h1>
            <h2 style={{ padding: '5px' }}> Tracked events:</h2>
            <div>
                    {
                    //var data = getData(id)
                    notification?.map(id => {
                        var data = getData(id)
                        return (<EventListPart key={id} id={id}/>)
                    })}
                
            </div>
        </>
    )
}
/*
{notification?.map(id => {
                    var data = getData(id)
                    return (<EventListPart key={id} id={id}/>)
                })}


*/ 

                    //return (<EventListPart event={event}/>)
