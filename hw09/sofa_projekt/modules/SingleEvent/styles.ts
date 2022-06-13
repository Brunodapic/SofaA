import styled from 'styled-components'
import Image from 'next/image'

export const EventsMainDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 5px;
  justify-content: space-evenly;
`

export const EventCard = styled.div`
  min-width: 400px;
  max-width: 800px;
  width: auto;
  height: auto;
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

export const DataDiv = styled.div`
  padding: 5px;
  justify-content: space-evenly;
  width: 800px;
`
export const DataDivElement = styled.div`
  display: inline;
  h3{
    border-top: black solid 1px;
    padding: 5px;
    padding-top: 15px;
  }
`
export const GroupDiv = styled.div`
  display: inline;
  justify-content: space-evenly;

`

export const GroupDivElement = styled.div`
  display: flex;
  justify-content: space-around;
  border-radius: 5px;
`