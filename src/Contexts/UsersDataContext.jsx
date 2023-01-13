import React from "react";
import { createContext, useContext, useState } from "react";
const userDataContext = createContext();

export function UserDataContextProvider({ children }) {
  const [userData, setUserData] = useState([]);
  const [isSetOnce, setIsSetOnce] = useState(false);
  return (
    <userDataContext.Provider
      value={{
        userData,
        setUserData,
        isSetOnce,
        setIsSetOnce,
      }}
    >
      {children}
    </userDataContext.Provider>
  );
}
export const UserData = () => {
  return useContext(userDataContext);
};
