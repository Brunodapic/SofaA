import styled from 'styled-components'
import Image from 'next/image'

export const EventsMainDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 5px;
  justify-content: space-evenly;
`

export const EventCard = styled.div`
  width: 800px;
  height: 1000px;
  border: 1px black solid;
  margin: 5px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  text-align: center;

`

export const EventCardElement = styled.div`
  flex: 0 0 50%;
  padding: 10px;
  text-align: center;
`

export const EventName = styled.h2`
  flex: 0 0 100%;
  padding: 10px;
  text-align: center;
`

export const TeamImage = styled(Image)`
  border-radius: 10px;
  flex: 0 0 50%;
  padding: 10px;
  text-align: center;
  cursor: pointer;
`

export const EventLinkTo = styled.div`
  flex: 0 0 100%;
  text-align: center;
  cursor: pointer;
`
export const MoreInfo = styled.div`
  padding: 5px;
  width: inherit;
  display:table-cell;
  flex: 0 0 100%;
  text-align: center;
  cursor: pointer;
  background-color: lightblue;
`