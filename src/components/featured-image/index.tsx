import React, { memo } from 'react'
import cx from 'classnames'

import brandUrl from '@/images/made-in-florida.svg'
import Spinner from '@/components/spinner'

import useOnload from './useOnload'

import {
  featuredImageWrapper,
  featuredImage,
  featuredImageInner,
  brandMark,
  hidden,
  spinnerWrapper,
} from './styles.scss'

interface FeaturedImageProps {
  alt: string
  className?: string
  showBrand?: boolean
  src: string
}

const FeaturedImage = memo(({
  alt,
  className = '',
  showBrand = false,
  src,
}: FeaturedImageProps) => {
  const { isLoaded, onload } = useOnload()

  return (
    <div className={cx(featuredImageWrapper, { [className]: !!className })}>
      <div className={featuredImageInner}>

        <img
          className={featuredImage}
          src={src}
          alt={alt}
          onLoad={onload}
        />

        {showBrand && (
          <img
            className={brandMark}
            src={brandUrl}
            aria-hidden
          />
        )}

        <div className={cx(spinnerWrapper, { [hidden]: isLoaded })}>
          <Spinner />
        </div>

      </div>
    </div>
  )
})

export default FeaturedImage