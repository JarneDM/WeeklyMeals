import { supabase } from "../../lib/supabase";

export const updateUser = async (name: string) => {
  const { data: authUser, error: authError } = await supabase.auth.getUser();

  if (authError || !authUser.user) {
    console.error("Error getting auth user:", authError);
    return;
  }

  const { error } = await supabase.from("users").update({ name }).eq("id", authUser.user.id);

  if (error) {
    console.error("Error updating user:", error);
  } else {
    console.log("User updated successfully");
  }
};
