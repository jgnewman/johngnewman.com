import React from 'react'

import Header from '@/components/header'
import Footer from '@/components/footer'
import PageGrid from '@/components/page-grid'

import useAppPages from './useAppPages'

const App = () => {
  const pageGrid = useAppPages()

  return (
    <>
      <Header />
      <PageGrid grid={pageGrid} />
      <Footer />
    </>
  )
}

export default App