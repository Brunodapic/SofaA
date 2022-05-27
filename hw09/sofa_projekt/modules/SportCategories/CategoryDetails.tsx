import React from 'react'
import { TeamPlayer } from '../../model/Team'
import PlayerLink from '../Link/PlayerLink'
import { Category } from '../../model/Categories'

export default function CategoryDetails({category}: {category: Category}) {
  return (
    <>
      {category.name}
    </>
  )
}