export interface Tournament {
    id: number
    slug: string
    name: string
    uniqueTournament: UniqueTournament
  }
  
  export interface UniqueTournament {
    titleHolder: any
    category: any
    id: number
    slug: string
    name: string
  }