import { GetServerSideProps } from "next";
import router from "next/router";
import { useEffect } from "react";
import useSWR from "swr";
import { Button } from "../../components/Button";
import { useNotification } from "../../context/NotificationContext";
import { api } from "../../util/fetch";
import { FullTeam, TeamPlayer } from '../../model/Team'
import TeamDetails from "../../modules/Team/TeamDetails";
 import {fetcher} from '../../util/fetch'
import { BasicEvent } from "../../model/Event";
import ProfileEvent from "../../modules/Profil/ProfilEvent";

  

export default function ProfilPage() {
    
      return (<ProfileEvent/>)
 }
    
