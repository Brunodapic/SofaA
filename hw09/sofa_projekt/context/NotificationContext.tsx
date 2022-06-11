import { createContext, useContext } from 'react';

export interface NotificationContext {
    notification?: any[]
    setNotification: (id:any)=>void;
}




//export default SetingsContext as unknown as React.Context<SetingsContext>
export const NotificationContext = createContext<NotificationContext>
    ({  notification: [],
        setNotification:(id:any)=>{console.log(id)}
});
export const useNotification = () => useContext(NotificationContext);

/*export const UserNameContex = createContext<UserNameContex>({ userName: 'undifined', setUserName:()=>console.log('username input')});
export const useUserName = () => useContext(UserNameContex);

export const JokersContex = createContext<JokersContex>({ halfhalf: false, sethalfhalf:()=>console.log('50/50')});
export const useHalfHalf = () => useContext(JokersContex);*/