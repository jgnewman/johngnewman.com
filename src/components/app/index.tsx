import React, { useMemo } from 'react'
import Header from '@/components/header'
import Footer from '@/components/footer'
import PageGrid from '@/components/page-grid'

interface PageProps {
  color: string
}

const Page = ({ color }: PageProps) => {
  return (
    <div style={{
      background: color,
      width: '100vw',
      height: '100vh',
      overflowY: 'auto',
      flexShrink: 0,
    }}></div>
  )
}

const useGridLayout = () => {
  return useMemo(() => {
    return [
      [
        {
          ui: <Page color="red" />,
          route: '/',
          title: 'Home',
        },
        {
          ui: <Page color="orange" />,
          route: '/who-i-am',
          title: 'Who I am',
        },
        {
          ui: <Page color="yellow" />,
          route: '/where-ive-been',
          title: "Where I've been",
        },
      ],
      [
        {
          ui: <Page color="green" />,
          route: '/what-i-do',
          title: 'What I do',
        },
        {
          ui: <Page color="blue" />,
          route: '/things-i-love',
          title: 'Things I love',
        },
        {
          ui: <Page color="purple" />,
          route: '/get-in-touch',
          title: 'Get in touch',
        },
      ],
    ]
  }, [])
}

const App = () => {
  const gridLayout = useGridLayout()

  return (
    <>
      <PageGrid grid={gridLayout} />
    </>
  )
}

export default App