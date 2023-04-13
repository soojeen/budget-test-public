'use client'

import { SSRProvider } from '@adobe/react-spectrum'

type ProvidersProps = {
  children: React.ReactNode
}

function Providers(props: ProvidersProps) {
  return <SSRProvider>{props.children}</SSRProvider>
}

export { Providers }
