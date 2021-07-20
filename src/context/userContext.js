import { createContext, useReducer } from 'react';

const UserContext = createContext();

const reducer = (state, update) => {
  return { ...state, ...update };
}
const UserProvider = ({ children }) => {
  const [user, update] = useReducer(reducer, {});

  const setUser = (name, email) => update({ name, email })

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}

export {
  UserProvider,
  UserContext
};
