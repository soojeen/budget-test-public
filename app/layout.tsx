import './globals.css'
import { Providers } from './providers'

export const metadata = {
  title: 'Budget',
  description: 'track your monies',
}

type RootLayoutProps = {
  children: React.ReactNode
}

export default function RootLayout(props: RootLayoutProps) {
  return (
    <html lang="en">
      <body>
        <Providers>{props.children}</Providers>
      </body>
    </html>
  )
}
