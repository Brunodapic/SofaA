import { Sport } from "./Sport"

export interface Category{
    sport:Sport
    name:string
    slug:string
    priority:number 
    id:number
    flag:string 
    alpha2:string
}


export interface SportCategories {
    category:Category
    totalEvents: number
    totalVideos: number
    totalEventPlayerStatistics: number
    uniqueTournamentIds: Array<number> | null
}

