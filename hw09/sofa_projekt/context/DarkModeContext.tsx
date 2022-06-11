import { createContext, useContext } from 'react';

interface DarkModeContext {
    darkMode?: boolean
    setDarkMode: (boolean:boolean)=>void;
}




//export default SetingsContext as unknown as React.Context<SetingsContext>
export const DarkModeContext = createContext<DarkModeContext>({ darkMode: false, setDarkMode:()=>console.log('dark mode')});
export const useDarkMode = () => useContext(DarkModeContext);

/*export const UserNameContex = createContext<UserNameContex>({ userName: 'undifined', setUserName:()=>console.log('username input')});
export const useUserName = () => useContext(UserNameContex);

export const JokersContex = createContext<JokersContex>({ halfhalf: false, sethalfhalf:()=>console.log('50/50')});
export const useHalfHalf = () => useContext(JokersContex);*/