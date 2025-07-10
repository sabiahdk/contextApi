import { createContext, useState} from "react"

const UserProvider = createContext = () => {

    const[userData,setUserData] = useState ({
        firstName:'',
        email:'',
        passWord:'',

    });
    return (
    <div>
        <UserContext.Provider value={{userData}}> {
            props.children}

            </UserContext.Provider>
    </div>
    );
};
