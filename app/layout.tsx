import { Providers } from './providers'
import { SyncColorScheme } from '@/utils/sync-color-scheme'
import { IgnoreHydrationWarning } from '@/utils/ignore-hydration-warning'
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
      <head>
        <IgnoreHydrationWarning />
        <SyncColorScheme />
      </head>
      <body>
        <Providers>{props.children}</Providers>
      </body>
    </html>
  )
}
