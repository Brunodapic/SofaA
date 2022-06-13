import { GetServerSideProps } from 'next'
import React, { useState } from 'react'
import { BasicEvent } from '../../../model/Event'
import PlayerDetails from '../../../modules/Player/PlayerDetails'
import { fetcher, api } from '../../../util/fetch'
import { Sport } from '../../../model/Sport'
import SportCategoriesPage from '../../../modules/SportCategories/SportCategoriesPage'
import EventsPage from '../../../modules/Events/EventsPage'
import useSWR from 'swr'

interface CategoriesProps {
  events: Array<BasicEvent>
  categoryID: number
}


export default function CategoryPage(props: CategoriesProps) {

  const [date, setDate] = useState(new Date().toISOString().slice(0, 10))
  const onChangeDate = (e: { target: { value: string | number | Date } }) => {
    const newDate = new Date(e.target.value).toISOString().slice(0, 10)
    setDate(newDate);
  };
  const { data, error } = useSWR<CategoriesProps>(`${api}/category/${props.categoryID}/scheduled-events/${date}`, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
    revalidateOnMount: false
  })

  if (data && !error) {

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
            onChange={(e) => onChangeDate(e)}
          />
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
          onChange={(e) => onChangeDate(e)}
        />
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
    const { country, categoryID } = params;
    const current = new Date();
    var date = new Date().toISOString().slice(0, 10);

    const details = await fetcher(`${api}/category/${categoryID}/scheduled-events/${date}`)
    https://api.sofascore.com/api/v1/category/8/scheduled-events/2022-05-28


    const props: CategoriesProps = { events: details.events, categoryID: categoryID }


    return {
      props: props,
    };
  } catch (error) {
    res.statusCode = 404;
    return { props: { error } };
  }
};
