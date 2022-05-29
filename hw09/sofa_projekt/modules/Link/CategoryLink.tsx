import Link from 'next/link'
import React from 'react'
import { Category } from '../../model/Categories'

interface P {
  category: Category
}

export default function CategoryLink({category}: React.PropsWithChildren<P>) {
  return (
    <Link href={{
      pathname: '/events/'+category.name+'/'+category.id
    }}>{category.name}</Link>
  )
}
