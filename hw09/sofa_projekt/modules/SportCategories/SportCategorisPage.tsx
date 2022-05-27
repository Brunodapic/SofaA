import { useRouter } from 'next/router'
import { Button } from '../../components/Button'
import { SportCategories } from '../../model/Categories'
import Category from './CategoryDetails'


export default function SportCategoriesPage({categories}:{categories:Array<SportCategories>}) {

  const router = useRouter()
  return (
    <div > 
      <Button onClick={() => router.push('/')}>INDEX</Button>
      
      {categories.map(element => {
        return (
        <div style={{marginTop: '20px'}}> 
          <Category category={element.category}/>
          <h1>{element.uniqueTournamentIds}</h1>
          <h1>{element.totalEvents}</h1>
          <h1>{element.totalVideos}</h1>
          <h1>{element.totalEventPlayerStatistics}</h1>
        </div>)
      })}
    
    </div>
  )
}