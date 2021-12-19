import React, { memo } from 'react'

import imageUrl from '@/images/face.jpg'
import PageWrapper from '@/components/pages/page-wrapper'
import FeaturedImage from '@/components/featured-image'

import { list } from './styles.scss'

const WhoIAm = memo(() => {
  return (
    <PageWrapper columns={2}>
      <div>
        <h1>Who I am</h1>
        <p>
          I am “Florida Man’s” mild-mannered, alter ego, situated in sunny
          Tallahassee with a wife and three kids. My career in frontend started
          as a hobby designing MySpace profiles and slowly evolved through a lot
          of self study into my current focus: React apps with TypeScript.
        </p>
        <p>
          In the past I've worked for agencies, tech startups, established
          companies, and research firms, both in the office and remote. I’ve
          climbed the ladder from entry-level to Director and have settled
          into my preferred niche as a team lead. Here’s my ideal toolkit:
        </p>
        <ul className={list}>
          <li>Functional React</li>
          <li>Redux Toolkit</li>
          <li>Node.js</li>
          <li>TypeScript + ESLint</li>
          <li>Webpack</li>
          <li>Express</li>
          <li>(S)CSS Modules</li>
          <li>Testing Library</li>
          <li>GraphQL</li>
        </ul>
      </div>
      <div>
        <FeaturedImage src={imageUrl} alt="me at my desk" showBrand />
      </div>
    </PageWrapper>
  )
})

export default WhoIAm