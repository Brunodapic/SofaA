import { GetServerSideProps } from 'next'
import React from 'react'
import { UniqueTournament } from '../../model/Tournament'
import {fetcher,api} from '../../util/fetch'
import { Sport } from '../../model/Sport'
import SportCategoriesPage from '../../modules/SportCategories/SportCategoriesPage'
import EventsPage from '../../modules/Events/EventsPage'
import UniqueTournamentPage from '../../modules/UniqueTournament/UniqueTournamentPage'

interface UniqueTournamentProps{
    uniqueTournament:UniqueTournament
}


export default function CategoryPage(props: UniqueTournamentProps) {
    console.log(props)
    return (

        <UniqueTournamentPage UniqueTournament={props.uniqueTournament}  />

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
    const { uniqueTournamentID } = params;

    console.log(`${api}/unique-tournament/${uniqueTournamentID}`)
    const details = await fetcher(`${api}/unique-tournament/${uniqueTournamentID}`)

    console.log(details.uniqueTournament)

    const props:UniqueTournamentProps ={uniqueTournament:details.uniqueTournament}

    console.log(props)

    return {
      props: props,
    };
  } catch (error) {
    res.statusCode = 404;
    return { props: { error } };
  }
};
