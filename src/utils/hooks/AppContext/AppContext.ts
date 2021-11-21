import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
} from 'react';

type UserType = {
  name: string;
};

type AppContextType = {
  user: UserType;
  setUser: React.Dispatch<
    React.SetStateAction<{
      name: string;
    }>
  >;
};

export const AppContext = createContext<AppContextType>({
  user: {
    name: '',
  },
  setUser: () => {},
});

export const useAppContext = () => useContext(AppContext);

export default AppContext;
