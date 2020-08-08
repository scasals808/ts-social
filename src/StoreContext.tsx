import React from "react";
import {store} from "./Redux/redux-store";
import App from "./App";
import {StoreType} from "./Redux/store";

export const StoreContext = React.createContext({} as StoreType)

type ProviderTypes = {
    store: StoreType
    children: React.ReactNode
}

export const Provider = (props: ProviderTypes) => {
    return <StoreContext.Provider value={props.store}>
        {props.children}
    </StoreContext.Provider>
}