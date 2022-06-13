import { GetServerSideProps } from "next";
import router from "next/router";
import useSWR from "swr";
import { Button } from "../../components/Button";
import { useNotification } from "../../context/NotificationContext";
import { api } from "../../util/fetch";
import * as S from './styles'


export default function ProfilPage() {

    function getData(id: number) {
        const { data, error } = useSWR<any>(`${api}/event/${id}`, {
            revalidateIfStale: false,
            revalidateOnFocus: false,
            revalidateOnReconnect: false,
        })
        return data
    }
    function getDate(timestamp: any) {
        var t = new Date(timestamp * 1000);
        return (t.toLocaleDateString('en-GB'));
    }

    const { notification } = useNotification()
    return (
        <>
            <h1 style={{padding:'5px'}}>User name: User</h1>
            <h2 style={{padding:'5px'}}> Tracked events:</h2>
            <div>
                {notification?.map(id => {
                    var data = getData(id)
                    return (<S.EventElementDiv  >
                        <div onClick={() => router.push(`/event/${id}`)}>

                            <div><h3>{data?.event?.homeTeam.name}</h3></div>
                            <div><h3> VS </h3></div>
                            <div><h3>{data?.event?.awayTeam.name}</h3></div>
                            <div><h3>{getDate(data?.event?.startTimestamp)}</h3></div>
                        </div>
                        <div>
                            <Button>yes</Button>
                            <Button>no</Button>
                        </div>
                    </S.EventElementDiv>)
                })}
            </div>
        </>
    );
}
