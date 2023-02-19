import { Suspense } from 'react'
import NoteList from './components/notes-list'
import RefreshBtn from './components/refresh-btn'
import Spinner from './components/spinner'
import TimerCounter from './components/timer-counter'

// app ディレクトリの中は全てサーバーコンポーネント
export default function Page() {
  return (
    <main>
      <div className="m-10 text-center">
        <div className="m-10 text-center">Hello World🚀</div>
        <Suspense fallback={<Spinner color="border-green-500" />}>
          {/* betaでは開発が間に合っていない */}
          {/* @ts-ignore */}
          <NoteList />
        </Suspense>
        <TimerCounter />
        <RefreshBtn />
      </div>
    </main>
  )
}
