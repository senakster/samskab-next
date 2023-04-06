import { createContext, useContext, useState } from 'react'

export const GlobalContext = createContext();

export function AppWrapper({ children }) {
    const [state, setState] = useState(null)
    const sharedState = {
        globalState: state,
        set: setState
    }
    return (
        <GlobalContext.Provider value={sharedState}>
            {children}
        </GlobalContext.Provider>
    );
}

export function useGlobal() {
    return useContext(GlobalContext);
}