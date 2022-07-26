import { useState, createContext } from "react";

interface IContext {
  children: any
}

interface IUser {
  user: any;
  setUser: React.Dispatch<React.SetStateAction<any>>;
}

/**
 * The initial context values.
 */
export const userContext = createContext<IUser>({
  user: {},
  setUser: async () => Promise,
});

export const UserProvider = ({ children }: IContext)=> {
  const [user, setUser] = useState({});

  const values = {
    user, 
    setUser
  };

  return (
    <userContext.Provider value={values}>
      {children}
    </userContext.Provider>
  );
};