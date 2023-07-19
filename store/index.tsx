import create from 'zustand'
import { Session } from '@supabase/supabase-js'

type State = {
    //ログインしているユーザーのsession状態
  session: Session | null
  setSession: (payload: Session | null) => void
}
const useStore = create<State>((set) => ({
  session: null,
  //受けっとったpay
  setSession: (payload) => set({ session: payload }),
}))
export default useStore