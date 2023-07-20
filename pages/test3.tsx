import type { NextPage } from 'next'
import { useEffect } from 'react'
import { supabase } from '../utils/supabase'
import useStore from '../store'
import { Auth3 } from '../components/Auth'
import { DashBoard3 } from '../components/DashBoard'

const Home: NextPage = () => {
  const session = useStore((state) => state.session)
  const setSession = useStore((state) => state.setSession)
  useEffect(() => {
    setSession(supabase.auth.session())
    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })
  }, [setSession])
  return <>{session ? <DashBoard3 /> : <Auth3 />}</>
}

export default Home
