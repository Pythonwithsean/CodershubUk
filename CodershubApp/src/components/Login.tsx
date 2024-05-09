import { useState, useEffect } from 'react'
import { Session, createClient } from '@supabase/supabase-js'
import { Auth } from '@supabase/auth-ui-react'
// import dotenv from "dotenv"
// dotenv.config()


const supabase = createClient('https://talvpjiamafodpwvpkqz.supabase.co', "yJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRhbHZwamlhbWFmb2Rwd3Zwa3F6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTM4Njc0NTAsImV4cCI6MjAyOTQ0MzQ1MH0.wCtgQvYuQ-1NDXmoBrh5Ip3OYEw3gqJFur1dkjt5-Aw")
 
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
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
    <div style={{ maxWidth: '400px', padding: '20px', backgroundColor: 'white', borderRadius: '10px' }}>
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
            message: { color: 'black' },
          },
        }}
        providers={['google', 'github', 'twitter']}
      />
    </div>
  </div>)
  }
  else {
    return (<div>Logged in!</div>)
  }
}
