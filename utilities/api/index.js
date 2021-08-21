import supabase from "../../supabase";

export const CreateUser = async ({ name, email, password }) => {
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

export const SignInUser = async (userData) => {
  return await supabase.auth.signIn(userData);
};
