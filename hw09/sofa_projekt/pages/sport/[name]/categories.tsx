import { GetServerSideProps } from 'next'
import React from 'react'
import { SportCategories } from '../../../model/Categories'
import PlayerDetails from '../../../modules/Player/PlayerDetails'
import {fetcher,api} from '../../../util/fetch'
import { Sport } from '../../../model/Sport'
import SportCategoriesPage from '../../../modules/SportCategories/SportCategoriesPage'

interface SportCategoriesProps{
    categories:Array<SportCategories>
}


export default function SportsPage(props: SportCategoriesProps) {
    console.log(props)
    return (<SportCategoriesPage categories={props.categories}/>)
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
    const date = `${current.getFullYear()}-${current.getMonth()+1}-${current.getDate()}`;

    //Category List
    const details = await fetcher(`${api}/sport/${name}/2021-05-07/7200/categories`)
   

    const props:SportCategoriesProps ={categories:details.categories}

    return {
      props: props,
    };
  } catch (error) {
    res.statusCode = 404;
    return { props: { error } };
  }
};
