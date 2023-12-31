import { FC, ReactNode } from 'react'
import Head from 'next/head'

type Props = {
  title: string
  children: ReactNode
}

export const LayoutNo: FC<Props> = ({ children, title = 'Mantine' }) => {
  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>{title}</title>
      </Head>
      <header></header>
      <main>
        {children}
      </main>
      <footer></footer>
    </div>
  )
}
