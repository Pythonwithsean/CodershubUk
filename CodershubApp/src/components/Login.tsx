import { useState, useEffect } from "react";
import { Session } from "@supabase/supabase-js";
import { Auth } from "@supabase/auth-ui-react";
import "../styles/login.css";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { supabase } from "./SupabaseClient";

async function logout(): Promise<void> {
  const { error } = await supabase.auth.signOut();
  if (error != null) {
    console.error(error);
    return;
  }
}
// Function That Gets usersName without @
function getUserNameFromEmail(email: string | undefined): string {
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

type loginProps = {
  children: JSX.Element;
};

export default function Login({ children }: loginProps) {
  const [session, setSession] = useState<Session | null>(null);
  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
    return () => subscription.unsubscribe();
  }, []);

  if (!session) {
    return (
      <div
        className="login-container"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <div
          className="login-semicontainer"
          style={{
            padding: "20px",
            backgroundColor: "white",
            borderRadius: "10px",
          }}
        >
          <Auth
            supabaseClient={supabase}
            theme="light"
            providers={[]}
            localization={{
              variables: {
                sign_in: {
                  email_label: "Your Email address",
                  password_label: "Your Password",
                },
              },
            }}
            appearance={{
              style: {
                button: { background: "black", color: "white" },
                container: { backgroundColor: "white" },
                anchor: { color: "black" },
                label: { color: "black" },
                input: { borderColor: "black" },
                loader: { color: "black" },
                message: { color: "black" },
              },
              theme: ThemeSupa,
            }}
            view="sign_up"
          />
        </div>
      </div>
    );
  } else {
    return (
      <>
        <h3>Welcome {getUserNameFromEmail(session.user.email)}</h3>
        <br />
        {children}
        <button onClick={logout}>LogOut</button>
      </>
    );
  }
}
