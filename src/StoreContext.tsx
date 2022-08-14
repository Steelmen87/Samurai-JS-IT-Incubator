import React from "react";
import {StoreType} from "./redux/State";
/*
const StoreContext = React.createContext({} as StoreType);

export type ProviderType = {
    store: StoreType
    children: React.ReactNode
}

export const Provider = (props: ProviderType) => {
    return <StoreContext.Provider value={props.store}>
        {props.children}
    </StoreContext.Provider>
}
export default StoreContext;*/

const StoreContext = React.createContext<any | null>(null);

export const Provider = (props: any) => {
    return <StoreContext.Provider value={props.store}>
        {props.children}
    </StoreContext.Provider>
}
export default StoreContext;

