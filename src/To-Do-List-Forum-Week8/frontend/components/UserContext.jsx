import { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [userSuddenlyLoggedOut, setUserSuddenlyLoggedOut] = useState(false);
    const [loggedOut, setLoggedOut] = useState(false);
    return(
        <UserContext.Provider value={{user, setUser, userSuddenlyLoggedOut, setUserSuddenlyLoggedOut, loggedOut, setLoggedOut}}>
            {children}
        </UserContext.Provider>
    );
}