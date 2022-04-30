import { createContext, useContext } from 'react';

interface SetingsContext {
    numberOfQ?: number
    setNumberOfQ: (number:number)=>void;
}

//const SetingsContext = React.createContext({})

//export default SetingsContext as unknown as React.Context<SetingsContext>
export const SetingsContext = createContext<SetingsContext>({ numberOfQ: 0, setNumberOfQ:()=>console.log('got Q right')});
export const useNumberOfQ = () => useContext(SetingsContext);