import { useEffect, useState, createContext, useContext } from "react";
import supabase from "../supabase";

export const UserContext = createContext();

export const UserContextProvider = (props) => {
  const [userLoaded, setUserLoaded] = useState(false);
  const [session, setSession] = useState(null);
  const [user, setUser] = useState(null);
  const [userDetails, setUserDetails] = useState(null);
  const [subscription, setSubscription] = useState(null);

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

  const getUserDetails = () =>
    supabase.from("users").select("*").eq("id", user.id);
  const getSubscription = () =>
    supabase
      .from("subscriptions")
      .select("*")
      .in("status", ["trialing", "active"])
      .eq("user_id", user.id);
  useEffect(() => {
    if (user) {
      Promise.allSettled([getUserDetails(), getSubscription()]).then(
        (results) => {
          setUserDetails(results[0].value.data);
          setSubscription(results[1].value.data);
          console.log(results);
          setUserLoaded(true);
        }
      );
    }
  }, [user]);

  const signUp = async ({ email, password }) => {
    return await supabase.auth.signUp({
      email,
      password,
    });
  };

  const signInOAuth = async (provider) => {
    return await supabase.auth.signIn(provider);
  };

  const value = {
    session,
    user,
    userDetails,
    subscription,
    signIn: (options) => supabase.auth.signIn(options),
    signInOAuth,
    signUp,
    userLoaded,
    signOut: () => {
      setUserDetails(null);
      setSubscription(null);
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
