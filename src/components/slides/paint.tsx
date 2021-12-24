import React, { memo } from 'react'

import imgUrl from '@/images/paintings.jpg'
import FeaturedImage from '@/components/featured-image'
import { slide, slideText, slideImg } from './styles.scss'

const Paint = memo(() => {
  return (
    <div className={slide}>
      <div className={slideText}>
        <h2>Watercolor paintings</h2>
        <p>
          I wasn’t always a painter. In fact I probably still don’t qualify
          as a real artist. But I’ve always loved the look of watercolor. So
          when we all got our mandatory “stay-at-home vacations” back in 2020,
          I figured I’d give it a shot.
        </p>
        <p>
          The first thing I learned is that paintings are very different from
          UI design and I will probably be an amateur for a long time to come.
          A lot of my work is still based on tutorials, and I haven’t exactly
          become one with the brush yet. But I’m progressing and that’s what
          matters. Maybe you’ll see me at an exhibition some day!
        </p>
      </div>
      <FeaturedImage
        className={slideImg}
        src={imgUrl}
        alt="a collage of my paintings"
      />
    </div>
  )
})

export default Paint