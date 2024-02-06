const { createContext, useState, useContext } = require("react");
const userContext = createContext(undefined);

export default function UserProvider({ children }) {
  const [firstUser, setfirstUser] = useState({});

  return (
    <userContext.Provider value={{ firstUser, setfirstUser }}>
      {children}
    </userContext.Provider>
  );
}

export const useUserContext = ()=> useContext(userContext)