import React from 'react'
import { TeamPlayer } from '../../model/Team'
import PlayerLink from '../Link/PlayerLink'
import { Category } from '../../model/Categories'
import CategoryLink from '../Link/CategoryLink'

export default function CategoryDetails({category}: {category: Category}) {
  return (
    <>
      <CategoryLink key={category.id} category={category}></CategoryLink>
    </>
  )
}