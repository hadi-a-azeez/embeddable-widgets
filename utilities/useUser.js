import { useEffect, useState, createContext, useContext } from "react";
import supabase from "../supabase";

export const UserContext = createContext();

export const UserContextProvider = (props) => {
  const [userLoaded, setUserLoaded] = useState(false);
  const [session, setSession] = useState(null);
  const [user, setUser] = useState(null);
  const [userDetails, setUserDetails] = useState(null);

  useEffect(() => {
    const session = supabase.auth.session();
    setSession(session);
    setUser(session?.user ?? null);
    const { data: authListener } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        setSession(session);
        setUser(session?.user ?? null);
      }
    );

    return () => {
      authListener.unsubscribe();
    };
  }, []);

  const getUserDetails = () => supabase.from("users").select("*").single();

  useEffect(() => {
    if (user) {
      Promise.allSettled([getUserDetails()]).then((results) => {
        setUserDetails(results[0].value.data);
        console.log(results);
        setUserLoaded(true);
      });
    }
  }, [user]);

  const signUp = async ({ name, email, password }) => {
    const { user, session, error } = await supabase.auth.signUp({
      email,
      password,
    });
    if (user) {
      const { data, error: userError } = await supabase
        .from("users")
        .insert({ email, name });
    }
    return { user, error };
  };

  const value = {
    session,
    user,
    userDetails,
    signIn: (options) => supabase.auth.signIn(options),
    signUp,
    signOut: () => {
      setUserDetails(null);
      return supabase.auth.signOut();
    },
  };
  return <UserContext.Provider value={value} {...props} />;
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error(`useUser must be used within a UserContextProvider.`);
  }
  return context;
};