import { BasicTeam } from './Team'

export interface Score {
  display: number
}

export interface BasicEvent {
  [x: string]: any
  tournament: any
  id: number
  customId: string
  homeTeam: BasicTeam
  awayTeam: BasicTeam
  homeScore: Score
  awayScore: Score
}

