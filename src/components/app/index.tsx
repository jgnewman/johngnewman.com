import React from 'react'
import Header from '@/components/header'
import Footer from '@/components/footer'
import { foo } from './test.css'

const App = () => {
  return (
    <>
      <Header />
      <h1 className={foo}>
        My React and TypeScript App!
      </h1>
      <Footer />
    </>
  )
}

export default App