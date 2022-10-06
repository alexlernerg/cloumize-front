import { useState, useEffect, createContext } from "react";
import { getUser } from "../services/UserService";
import { getAccessToken } from "../store/AccessTokenStore";

interface IContext {
  children: any;
}

const defaultUser = {
  name: '',
  email: ''
}

export const UserContext = createContext<any>({
  currentUser: defaultUser,
  setCurrentUser: async () => Promise,
});

export const UserProvider = ({ children }: IContext): any => {
  const [currentUser, setCurrentUser] = useState<any>();
  
  const getCurrentUser = async (): Promise<React.SetStateAction<any>> => {
    return await getUser()
    .then((response: any) => {
      setCurrentUser(response);
    })
    .catch((error: any)=>{
      console.error('Unable to get user data', error)
    });
  };

  useEffect(() => {
    if (getAccessToken()) {
      getCurrentUser();
    }
    // console.log("currentUser", currentUser)
  }, []);

  const values: any = {
    currentUser,
    setCurrentUser,
    getCurrentUser,
  };

  return <UserContext.Provider value={values}>{children}</UserContext.Provider>;
};