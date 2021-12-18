import React, { memo } from 'react'

import brandUrl from '@/images/made-in-florida.svg'
import { featuredImageWrapper, featuredImage, featuredImageInner, brandMark } from './styles.scss'

interface FeaturedImageProps {
  alt: string
  showBrand?: boolean
  src: string
}

// TODO: Implement lazy loading of images with cool spinner
const FeaturedImage = memo(({
  alt,
  showBrand = false,
  src,
}: FeaturedImageProps) => {
  return (
    <div className={featuredImageWrapper}>
      <div className={featuredImageInner}>
        <img className={featuredImage} src={src} alt={alt} />
        {showBrand && <img className={brandMark} src={brandUrl} aria-hidden />}
      </div>
    </div>
  )
})

export default FeaturedImage