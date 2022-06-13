import Link from 'next/link'
import React from 'react'
import { FullPlayer } from '../../../model/Player'

export default function PlayerHeader({player}: {player: FullPlayer}) {
  return (
    <>
      <div>{player.name}</div>
    </>
  )
}