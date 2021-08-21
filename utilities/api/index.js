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
    return user;
  } else {
    return error;
  }
};

export const SignInUser = async (userData) => {
  let repsonse;
  const { data: user, error: userError } = await supabase
    .from("users")
    .select("*")
    .eq("email", userData.email);
  if (user.length !== 0) {
    if (user[0].password === userData.password) {
      repsonse = { status: 200, message: "User Logined" };
    } else {
      repsonse = { status: 400, message: "Check your email or password" };
    }
  } else {
    repsonse = { status: 400, message: "Check your email or password" };
  }
  return repsonse;
};
