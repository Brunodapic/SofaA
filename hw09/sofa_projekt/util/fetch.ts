import useSWR from "swr"

//@ts-ignore
export const fetcher = (...args) => fetch(...args).then(res => res.json())

export const api= 'https://api.sofascore.com/api/v1'

export async function getTeamImage(id:any){

    const image = await fetcher(`${api}/team/${id}/image`)

    return image
}

