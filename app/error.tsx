// クライアントコンポーネントを指定できる
// エラーメッセージをクライアントで表示できる
'use client'

export default function Error({ error }: { error: Error }) {
  return (
    <div>
      <p className="mt-6 text-center text-red-500">
        Data fetching in server failed
      </p>
    </div>
  )
}
