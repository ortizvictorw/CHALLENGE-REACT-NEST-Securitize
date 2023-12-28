import { createContext, useState, ReactNode, useContext } from "react";

interface UserContextProps {
    children: ReactNode;
}
const userContext = createContext<any>(null);
const userToggleContext = createContext<any>(() => { });

export function useUserContext() {
    return useContext(userContext)
}

export function useUserToggleContext() {
    return useContext(userToggleContext)
}

export function UserProvider({ children }: UserContextProps) {
    const [user, setUser] = useState<any>(null);
    const setUSerStorage = (userData:any)=>{
        setUser(userData)
    }

    return (
        <div>
            <userContext.Provider value={user}>
                <userToggleContext.Provider value={setUSerStorage}>
                    {children}
                </userToggleContext.Provider>
            </userContext.Provider>
        </div>
    );
}
