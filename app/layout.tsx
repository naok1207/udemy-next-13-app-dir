// app 直下の layout はルートレイアウトとして適用される
// page/_app.tsx の中に書くようなことを書くことができる

import '../styles/globals.css'
import NavBar from './components/nav-bar'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <body>
        <NavBar />
        {children}
      </body>
    </html>
  )
}
