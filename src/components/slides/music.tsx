import React, { memo } from 'react'

import imgUrl from '@/images/band.jpg'
import FeaturedImage from '@/components/featured-image'
import { slide, slideText, slideImg } from './styles.scss'

const Music = memo(() => {
  return (
    <div className={slide}>
      <div className={slideText}>
        <h2>Music of all kinds</h2>
        <p>
          Once upon a time I was in a band. We played a “unique” combination
          of Reggae-inspired, late ‘90s Hard Rock and early ‘00s Pop Punk.
          But these days I’m into more than just heavy guitars. Though there’s
          still a heavy dose of Power Metal in my Spotify playlists, there’s
          also a good bit of EDM, Kentucky Blugrass, and international Folk in
          there, just for good measure.
        </p>
        <p>
          My days on the stage may be behind me (for now) but I still enjoy
          relaxing with a guitar or poking around at an upbeat electronic track.
          If I ever get a little more free time, maybe I’ll finally put out
          that album…
        </p>
      </div>
      <FeaturedImage
        className={slideImg}
        src={imgUrl}
        alt="me playing a guitar"
        showBrand
      />
    </div>
  )
})

export default Music