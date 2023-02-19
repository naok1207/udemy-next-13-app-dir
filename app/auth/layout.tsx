import { headers, cookies } from 'next/headers'
import SupabaseListener from '../components/supabase-listener'
// server component で利用できる supabase の clent を作成してくれる関数
import { createServerComponentSupabaseClient } from '@supabase/auth-helpers-nextjs'
import type { Database } from '../../database.types'

export default async function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // headers, cookies を指定することでクライアントサイドで持っているaccessTokenをサーバーサイドに渡せるようにできる
  const supabase = createServerComponentSupabaseClient<Database>({
    headers,
    cookies,
  })
  const {
    data: { session },
    // サーバーサイドに保存されているセッション情報を取得することができる
  } = await supabase.auth.getSession()
  return (
    <>
      {/* サーバーサイドに保存されているaccessTokenをクライアントサイドに渡す */}
      <SupabaseListener accessToken={session?.access_token} />
      {children}
    </>
  )
}
