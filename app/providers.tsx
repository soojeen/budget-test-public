'use client'

import { SSRProvider, Provider, defaultTheme } from '@adobe/react-spectrum'

type ProvidersProps = {
  children: React.ReactNode
}

function Providers(props: ProvidersProps) {
  return (
    <SSRProvider>
      <Provider theme={defaultTheme}>{props.children}</Provider>
    </SSRProvider>
  )
}

export { Providers }
