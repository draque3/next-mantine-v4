import { FC, ReactNode } from 'react'
import Head from 'next/head'

type Props = {
  title: string
  children: ReactNode
}

export const LayoutTop: FC<Props> = ({ children, title = 'Mantine' }) => {
  return (
    <div className="flex min-h-screen bg-white">
      <Head>
        <title>{title}</title>
      </Head>
      <header></header>
      <main className="flex flex-1 flex-col">
        {children}
      </main>
      <footer></footer>
    </div>
  )
}
