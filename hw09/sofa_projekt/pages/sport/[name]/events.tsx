import { GetServerSideProps } from 'next'
import React, { useEffect, useState } from 'react'
import { SportCategories } from '../../../model/Categories'
import PlayerDetails from '../../../modules/Player/PlayerDetails'
import { fetcher, api } from '../../../util/fetch'
import { BasicEvent } from '../../../model/Event'
import SportCategoriesPage from '../../../modules/SportCategories/SportCategoriesPage'
import useSWR from 'swr'
import { Button } from '../../../components/Button'
import router from 'next/router'
import Events from 'events'
import EventsPage from '../../../modules/Events/EventsPage'

interface SportEventsProps {
    events: Array<BasicEvent>
    name:string | undefined
}


export default function SportEventPage(props: SportEventsProps) {

    const [date,setDate]= useState(new Date().toISOString().slice(0, 10))
    const onChangeDate = (e: { target: { value: string | number | Date } }) => {
        const newDate=new Date(e.target.value).toISOString().slice(0, 10)
        setDate(newDate);
        //console.log(newDate); //value picked from date picker
    };
    const { data, error } = useSWR<SportEventsProps>(`${api}/sport/${props.name}/scheduled-events/${date}`,{
        revalidateIfStale: false,
        revalidateOnFocus: false,
        revalidateOnReconnect: false,
        revalidateOnMount: false
      })

    if(data && !error){
        //console.log(`${api}/sport/${props.name}/scheduled-events/${date}`)
        console.log("USESWR:")
        //console.log(data)

        return (
            <>
                <div>
                    <label htmlFor="start">Start date:</label>
    
                    <input 
                        type="date" 
                        id="start" 
                        name="trip-start"
                        min="2010-01-01" 
                        value={date}
                        onChange={(e)=>onChangeDate(e)}
                        />
                </div>
                <div>
                <Button onClick={() => router.push('/sport/'+props.name+'/categories')}>View categories</Button>
                </div>
                <EventsPage events={data.events} />
    
            </>
        )
    }
  
        return (
        <>
            <div>
                <label htmlFor="start">Start date:</label>

                <input 
                    type="date" 
                    id="start" 
                    name="trip-start"
                    min="2010-01-01" 
                    value={date}
                    onChange={(e)=>onChangeDate(e)}
                    />
            </div>
            <div>
                <Button onClick={() => router.push('/sport/'+props.name+'/categories')}>View categories</Button>
            </div>

            

            <EventsPage events={props.events} />

        </>
    )

}

// This value is considered fresh for ten seconds (s-maxage=10).
// If a request is repeated within the next 10 seconds, the previously
// cached value will still be fresh. If the request is repeated before 59 seconds,
// the cached value will be stale but still render (stale-while-revalidate=59).
//
// In the background, a revalidation request will be made to populate the cache
// with a fresh value. If you refresh the page, you will see the new value.

export const getServerSideProps: GetServerSideProps = async (context) => {
    const { params, res } = context;
    try {
        //@ts-ignore
        const { name } = params;
        const current = new Date();
        //const date = `${current.getFullYear()}-${current.getMonth() + 1}-${current.getDate()-1}`;
        var date = new Date().toISOString().slice(0, 10);

        //events
        const details = await fetcher(`${api}/sport/${name}/scheduled-events/${date}`)

        console.log(details)
        const props: SportEventsProps = { events: details.events , name:name}

        return {
            props: props,
        };
    } catch (error) {
        res.statusCode = 404;
        return { props: { error } };
    }
};
