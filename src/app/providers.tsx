import { PropsWithChildren } from 'react'

//COMPONENTS
import GlobalStyles from '@/styles/global'

export function Providers({ children }: PropsWithChildren) {
  return (
    <>
      <GlobalStyles />
      {children}
    </>
  )
}
