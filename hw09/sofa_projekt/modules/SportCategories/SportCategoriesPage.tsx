import { useRouter } from 'next/router'
import { Button } from '../../components/Button'
import { SportCategories } from '../../model/Categories'
import Category from './CategoryDetails'
import * as S from './styles'
import Image from 'next/image'
import GeuniqueTournamentIDname from './idDetails'
import { api } from '../../util/fetch'
import { TeamImage } from '../Events/styles'

export default function SportCategoriesPage({categories}:{categories:Array<SportCategories>}) {

  const router = useRouter()

  const myLoader = (id: any) => {
    return `${api}/unique-tournament/${id.src}/image`
}
  
  
  return (
    <><Button onClick={() => router.push('/')}>INDEX</Button>
    <S.CategoriesMainDiv > 
      
      
      {categories.map(element => {
        return (
  
        <S.SportsCategoryCard key={element.category.id+element.category.name}> 
          <Category  category={element.category}/>
          <h1>{element.totalEvents}</h1>
          <h1>{element.totalVideos}</h1>
          <h1>{element.totalEventPlayerStatistics}</h1>
          {element.uniqueTournamentIds?.map(  ID =>{
            
            
            return (
              <TeamImage
              style={{cursor: 'pointer'}}
              onClick={() => router.push(`/unique-tournament/${ID}/`)}
              loader={myLoader}
              id={ID.toString()}
              alt="Picture of the author"
              src={ID.toString()}
              width={60}
              height={60}
          />

            )//<GeuniqueTournamentIDname uniqueTournamentID={ID}/>
            
            })}
        </S.SportsCategoryCard>)
      })}
    
    </S.CategoriesMainDiv>
    </>
  )
}