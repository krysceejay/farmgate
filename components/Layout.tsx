import {FC, ReactNode} from "react"
import Head from "next/head"
import Tabs from './Tabs'

interface IProps {
  children: ReactNode,
  title: string,
  showTabs?: boolean
}

const Layout: FC<IProps> = ({ children, title, showTabs = true }) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
      </Head>
      {children}
      {showTabs && <Tabs />}
    </div>
  )
}

export default Layout
