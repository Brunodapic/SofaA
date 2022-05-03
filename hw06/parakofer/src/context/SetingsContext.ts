import { createContext, useContext } from 'react';

interface SetingsContext {
    numberOfQ?: number
    setNumberOfQ: (number:number)=>void;
}

interface UserNameContex {
    userName?: string
    setUserName: (string:string)=>void;
}

interface JokersContex {
    halfhalf?: boolean
    sethalfhalf: (boolean:boolean)=>void;
}

//const SetingsContext = React.createContext({})

//export default SetingsContext as unknown as React.Context<SetingsContext>
export const SetingsContext = createContext<SetingsContext>({ numberOfQ: 0, setNumberOfQ:()=>console.log('got Q right')});
export const useNumberOfQ = () => useContext(SetingsContext);

export const UserNameContex = createContext<UserNameContex>({ userName: 'undifined', setUserName:()=>console.log('username input')});
export const useUserName = () => useContext(UserNameContex);

export const JokersContex = createContext<JokersContex>({ halfhalf: false, sethalfhalf:()=>console.log('50/50')});
export const useHalfHalf = () => useContext(JokersContex);
