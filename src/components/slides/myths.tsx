import React, { memo } from 'react'

import imgUrl from '@/images/books.jpg'
import FeaturedImage from '@/components/featured-image'
import { slide, slideText, slideImg } from './styles.scss'

const Myths = memo(() => {
  return (
    <div className={slide}>
      <div className={slideText}>
        <h2>Northern mythology</h2>
        <p>
          It’s more than just vikings and Ragnarok! Norse mythology is part
          of a larger category of ancient, Indo-European belief shared by
          linguistically-related groups that have a common origin in ancient
          Northern Europe. It’s there, at that broader level, where my
          interests really lie.
        </p>
        <p>
          Studying “northern mythology” has led me down a long rabbit hole
          of books and research papers. Ask me about Thor’s hammer and I’ll
          probably end up telling you about stone-age axes and British,
          Migration-Era pendants. I may not be credentialed, but I’d like
          to think I can hold my own, maybe even with some of the pros!
        </p>
      </div>
      <FeaturedImage
        className={slideImg}
        src={imgUrl}
        alt="books on my shelf"
      />
    </div>
  )
})

export default Myths