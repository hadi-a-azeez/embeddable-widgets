import supabase from "../../supabase";

export const CreateUser = async (userData) => {
  let repsonse;
  const { data: user, error: userError } = await supabase
    .from("users")
    .select("*")
    .eq("email", userData.email);
  if (user.length !== 0) {
    repsonse = { status: 400, message: "User already registered" };
  } else {
    const { data, error } = await supabase.from("users").insert(userData);
    if (data) {
      repsonse = { status: 200, message: "User registered successfully" };
    } else {
      repsonse = { status: 400, message: "error occured" };
    }
  }
  return repsonse;
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
