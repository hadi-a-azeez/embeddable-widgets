import supabase from "../../supabase";

export const updateUserName = async (user, name) => {
  const { data, error } = await supabase
    .from("users")
    .update({
      name: name,
    })
    .eq("id", user.id);
  if (data) console.log(data);
  else console.log(error);
};
