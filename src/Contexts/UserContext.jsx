import React from "react";
import { createContext, useContext, useState } from "react";
const userContext = createContext();

export function UserContextProvider({ children }) {
  const [userName, setUserName] = useState("");
  const [interests, setInterests] = useState([]);
  return (
    <userContext.Provider
      value={{
        userName,
        setUserName,
        interests,
        setInterests,
      }}
    >
      {children}
    </userContext.Provider>
  );
}
export const NowUserData = () => {
  return useContext(userContext);
};
