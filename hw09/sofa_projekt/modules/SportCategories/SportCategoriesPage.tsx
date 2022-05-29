import { useRouter } from 'next/router'
import { Button } from '../../components/Button'
import { SportCategories } from '../../model/Categories'
import Category from './CategoryDetails'
import * as S from './styles'
import CategoryLink from '../Link/CategoryLink'
import useSWR from 'swr'
import { api, fetcher } from '../../util/fetch'
import GeuniqueTournamentIDname from './idDetails'

export default function SportCategoriesPage({categories}:{categories:Array<SportCategories>}) {

  const router = useRouter()

  
  
  return (
    <><Button onClick={() => router.push('/')}>INDEX</Button>
    <S.CategoriesMainDiv > 
      
      
      {categories.map(element => {
        return (
  
        <S.SportsCategoryCard key={element.category.id+element.category.name}> 
          <Category category={element.category}/>
          <h1>{element.totalEvents}</h1>
          <h1>{element.totalVideos}</h1>
          <h1>{element.totalEventPlayerStatistics}</h1>
          {element.uniqueTournamentIds?.map( ID =>{
            
            
            return <GeuniqueTournamentIDname uniqueTournamentID={ID}/>
            
            })}
        </S.SportsCategoryCard>)
      })}
    
    </S.CategoriesMainDiv>
    </>
  )
}