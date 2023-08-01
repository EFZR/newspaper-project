import { useContext, createContext } from 'react';

interface authContextProps {
  isLogged: boolean;
  setIsLogged: React.Dispatch<React.SetStateAction<boolean>>;
}

export const AuthContext = createContext<authContextProps>({
  isLogged: false,
  setIsLogged: () => { },
});

export const useAuth = () => {
  const context = useContext(AuthContext);
  return context;
};