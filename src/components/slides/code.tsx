import React, { memo } from 'react'

import imgUrl from '@/images/code.jpg'
import FeaturedImage from '@/components/featured-image'
import { slide, slideText, slideImg } from './styles.scss'

const Code = memo(() => {
  return (
    <div className={slide}>
      <div className={slideText}>
        <h2>Clean, simple code</h2>
        <p>
          I don’t like overengineering and I don’t like bandaids
          building up over time. Of course, I always try to empathize
          with the engineers that came before me. And blame is often
          useless when when we can solve problems instead. So when I
          run into messes in the code, it’s almost impossible for me
          to not start cleaning up.
        </p>
        <p>
          Some of my favorite accomplishments involve creating and
          implementing strategies to address technical debt on an ongoing
          basis. Don’t get me wrong, I love building new features just as
          well. But lets find a way to keep our apps healthy while still
          giving users what they want!
        </p>
      </div>
      <FeaturedImage
        className={slideImg}
        src={imgUrl}
        alt="a code diff"
      />
    </div>
  )
})

export default Code