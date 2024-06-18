import { supabase } from "../components/SupabaseClient";

// Function That Gets usersName without @
export function getUserNameFromEmail(email: string | undefined): string {
  if (typeof email === "undefined") {
    return "";
  }
  let endPtr = 0;
  for (let i = 0; i < email.length; i++) {
    if (email[i] === "@") {
      endPtr = i;
    }
  }
  return email.substring(0, endPtr);
}

export async function getUserDetails() {
	const user = (await supabase.auth.getSession()).data.session
	return user

}


export async function logout(): Promise<void> {
    const { error } = await supabase.auth.signOut();
    if (error != null) {
      console.error(error);
      return;
    }
}

