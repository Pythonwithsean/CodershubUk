import { useEffect } from "react";
import { Auth } from "@supabase/auth-ui-react";
import "../styles/login.css";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { supabase } from "./SupabaseClient";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "./Auth";
export default function Login() {
  const { session, setSession } = useAuthContext();
  const navigate = useNavigate();
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
  }, [setSession]);

  useEffect(() => {
    if (session) {
      navigate("/dashboard");
    }
  }, [session, navigate]);

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
            view="sign_in"
          />
        </div>
      </div>
    );
  } else {
    return <></>;
  }
}
