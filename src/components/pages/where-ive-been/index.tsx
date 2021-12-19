import React, { memo } from 'react'

import PageWrapper from '@/components/pages/page-wrapper'

import { textGrid } from './styles.scss'

const WhereIveBeen = memo(() => {
  return (
    <PageWrapper columns={1}>
      <div>
        <h1>Where I've been</h1>
        <div className={textGrid}>
          <p>
            My story is a little unusual. I graduated from FSU in May of 2009, at
            the height of the big recession. My degree was oriented toward landing
            a job in the intelligence field, but with all the hiring freezes, there
            weren’t many jobs to be found for folks without military experience.
          </p>
          <p>
            I was working for the Florida Center for Reading Research at the time,
            and was customizing MySpace profiles for local bands on the side. But
            it wasn’t a good long-term solution, so I decided to lean into the web
            design angle. I got my hands on a copy of Photoshop and Illustrator,
            put together a concept portfolio, and started applying for jobs.
          </p>
          <p>
            I landed my first design job at a local firm called IRBsearch, and
            found wonderful mentorship there. Not only from my boss, but also from
            the guys down in IT who noticed I had a knack for code and took the time
            to point me in the right direction.
          </p>
          <p>
            After a few years with IRB and having grown my own freelance operation,
            I moved on to a remote, NoSQL startup called Basho, taking on a dual role
            as both a designer and developer. Apart from directing all of the company’s
            design work for a time, I gained valuable experience in functional programming
            languages and was exposed to cutting-edge application of CS theory.
          </p>
          <p>
            My next gig was at an agency in Boulder, CO., (called Imulus at the time)
            where I began with another design/development role, and moved up the
            hierarchy, eventually becoming the Creative Director and Director of
            Frontend. I gained a lot of management experience, but also learned that
            I prefer working a little more closely with my team.
          </p>
          <p>
            After the agency, I moved exclusively into development, taking on Lead
            roles first at Olark and then at InVision. During this time, I’ve been
            honing my specialization in frontend, as well as providing value from my
            unique background. Let me know if my skills sound useful to you!
          </p>
        </div>
      </div>
    </PageWrapper>
  )
})

export default WhereIveBeen