'use client'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import supabase from '../../utils/supabase'
import useStore from '../../store'

export default function SupabaseListener({
  accessToken,
}: {
  accessToken?: string
}) {
  const router = useRouter()
  const { updateLoginUser } = useStore()
  useEffect(() => {
    const getUserInfo = async () => {
      const { data } = await supabase.auth.getSession()
      if (data.session) {
        updateLoginUser({
          id: data.session?.user.id,
          email: data.session?.user.email!,
        })
      }
    }
    getUserInfo()
    // セッション情報の変化を監視してくれる ログイン・ログアウト時に処理を実行してくれる
    supabase.auth.onAuthStateChange((_, session) => {
      updateLoginUser({ id: session?.user.id, email: session?.user.email! })
      // client side と server side の accessToken の比較を行なっている
      if (session?.access_token !== accessToken) {
        router.refresh()
      }
    })
  }, [accessToken])
  return null
}
