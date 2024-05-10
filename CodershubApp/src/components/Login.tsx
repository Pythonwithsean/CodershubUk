import { useState, useEffect} from 'react'
import { Session, createClient } from '@supabase/supabase-js'
import { Auth } from '@supabase/auth-ui-react'
import "../styles/login.css"
const PROJECT_URL="https://talvpjiamafodpwvpkqz.supabase.co"
const PROJECT_TOKEN="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRhbHZwamlhbWFmb2Rwd3Zwa3F6Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcxMzg2NzQ1MCwiZXhwIjoyMDI5NDQzNDUwfQ.4aAAYjVkQwBknWxZEih8g8DHwHMuerNYas7SVAX0VSg"
const supabase = createClient(PROJECT_URL,PROJECT_TOKEN)

function logout():void {
  localStorage.removeItem("sb-talvpjiamafodpwvpkqz-auth-token")
  location.href="/" 
}

export default function Login() {
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
    <div className='login-semicontainer' style={{  padding: '20px', backgroundColor: 'white', borderRadius: '10px' }}>
      <Auth
        supabaseClient={supabase}
        appearance={{
          style: {
            button: { background: 'black', color: 'white' },
            container: { backgroundColor: 'white' },
            anchor: { color: 'black' },
            label: { color: 'black' },
            input: { borderColor: 'black' },
            loader: { color: 'black' },
            message: { color: 'red' },
          },
        }} 
        providers={['google', 'github' ]}
      />
    </div>
  </div>)
  }
  else {
    return (<div><h1>Dashboard</h1>
      <button onClick={logout}>LogOut</button>
    </div>)
  }
}
