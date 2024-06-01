import { useState, useEffect } from 'react'
import { Session, createClient } from '@supabase/supabase-js'
import { Auth } from '@supabase/auth-ui-react'
import "../styles/login.css"
import { ThemeSupa } from '@supabase/auth-ui-shared'
const PROJECT_URL = "https://talvpjiamafodpwvpkqz.supabase.co"
const PROJECT_TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRhbHZwamlhbWFmb2Rwd3Zwa3F6Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcxMzg2NzQ1MCwiZXhwIjoyMDI5NDQzNDUwfQ.4aAAYjVkQwBknWxZEih8g8DHwHMuerNYas7SVAX0VSg"
const supabase = createClient(PROJECT_URL, PROJECT_TOKEN)

function logout(): void {
  supabase.auth.signOut()
  localStorage.removeItem("sb-talvpjiamafodpwvpkqz-auth-token")
  location.href = "/"
}

// Function That Gets usersName without @
function getUserNameFromEmail(email: string | undefined): string{
  if( typeof email === "undefined"){ 
    return ""
  }
  let endPtr = 0; 
  for(let i = 0; i < email.length; i++){ 
    if(email[i] === "@"){
      endPtr = i 
    }
  }
  return email.substring(0,endPtr) 
}

type loginProps = {
  children: JSX.Element
}

export default function Login({ children }: loginProps) {
  const [session, setSession] = useState<Session | null>(null)
  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
    })
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })
    return () => subscription.unsubscribe()
  }, [])




  if (!session) {
    return (
      <div className='login-container' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <div className='login-semicontainer' style={{ padding: '20px', backgroundColor: 'white', borderRadius: '10px' }}>
          <Auth
            supabaseClient={supabase}
            theme="light"
            providers={[]}
            localization={{
              variables: {
                sign_in: {
                  email_label: 'Your Email address',
                  password_label: 'Your Password',

                },
              },
            }}
            appearance={{
              style: {
                button: { background: 'black', color: 'white' },
                container: { backgroundColor: 'white' },
                anchor: { color: 'black' },
                label: { color: 'black' },
                input: { borderColor: 'black' },
                loader: { color: 'black' },
                message: { color: 'black' },
              },
              theme: ThemeSupa
            }}
            view='sign_up'
          />
        </div>
      </div>)
  }
  else {
    return (
    <>
    <h3>Welcome {getUserNameFromEmail(session.user.email)}</h3>
    <br />
      {children}
      <button onClick={logout}>LogOut</button>
    </>)
  }
}
