import { GetServerSideProps } from 'next'
import React from 'react'
import { BasicEvent } from '../../../model/Event'
import PlayerDetails from '../../../modules/Player/PlayerDetails'
import {fetcher,api} from '../../../util/fetch'
import { Sport } from '../../../model/Sport'
import SportCategoriesPage from '../../../modules/SportCategories/SportCategoriesPage'
import EventsPage from '../../../modules/Events/EventsPage'

interface CategoriesProps{
    events:Array<BasicEvent>
}


export default function CategoryPage(props: CategoriesProps) {
    console.log(props)
    return (

        <EventsPage events={props.events}/>

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
    const { country,categoryID } = params;
    const current = new Date();
    const date = `${current.getFullYear()}-${current.getMonth()+1}-${current.getDate()}`;

    console.log(`${api}/category/${categoryID}/scheduled-events/2021-05-07`)
    const details = await fetcher(`${api}/category/${categoryID}/scheduled-events/2021-05-07`)
    https://api.sofascore.com/api/v1/category/8/scheduled-events/2022-05-28

    console.log(details.events)

    const props:CategoriesProps ={events:details.events}

    console.log(props)

    return {
      props: props,
    };
  } catch (error) {
    res.statusCode = 404;
    return { props: { error } };
  }
};
