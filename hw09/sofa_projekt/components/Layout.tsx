import useSWR from 'swr'
import Navbar from '../modules/Navbar/Navbar'

export default function Layout({ children }:any) {
  //const { data, error } = useSWR('/api/navigation', fetcher)

  //if (error) return <div>Failed to load</div>
  //if (!data) return <div>Loading...</div>

  return (
    <>
      <Navbar  />
      <main>{children}</main>
    </>
  )
}