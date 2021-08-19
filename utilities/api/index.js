import supabase from "../../supabase";

export const CreateUser = async (userData) => {
  const { data: user, error: userError } = await supabase
    .from("users")
    .select("*")
    .eq("email", userData.email);
  if (user.length !== 0) {
    return { status: 400, message: "User already registered" };
  } else {
    const { data, error } = await supabase.from("users").insert(userData);
    if (data) return { status: 200, message: "User registered successfully" };
    else return { status: 400, message: "error occured" };
  }
};

export const SignInUser = async (userData) => {
  const { data: user, error: userError } = await supabase
    .from("users")
    .select("*")
    .eq("email", userData.email);
  if (user.length !== 0) {
    return { status: 200, message: "User Logined" };
  } else {
    return { status: 400, message: "Check your email or password" };
  }
};
