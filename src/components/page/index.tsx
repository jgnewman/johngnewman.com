import React from 'react'

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
    }}>
    </div>
  )
}

export default Page