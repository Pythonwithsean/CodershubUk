import { Session } from "@supabase/supabase-js";
import { createContext, useContext, useState } from "react";

type authContextType = {
  session: Session | null;
  setSession: (session: Session | null) => void;
};

const authContext = createContext<authContextType>({
  session: null,
  setSession: () => {},
});

type AuthContextProviderProps = {
  children: JSX.Element | JSX.Element[];
};

export function useAuthContext() {
  return useContext(authContext);
}

export function AuthContextProvider({ children }: AuthContextProviderProps) {
  const [session, setSession] = useState<Session | null>(null);
  return (
    <authContext.Provider value={{ session, setSession }}>
      {children}
    </authContext.Provider>
  );
}
