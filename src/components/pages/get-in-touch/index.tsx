import React, { memo } from 'react'

import airplaneUrl from '@/images/airplane.svg'
import imageUrl from '@/images/get-in-touch.jpg'
import PageWrapper from '@/components/pages/page-wrapper'
import FeaturedImage from '@/components/featured-image'

import useMailToLink from './useMailToLink'

import {
  textCell,
  asterisk,
  emailBtn,
  footNote,
} from './styles.scss'

const GetInTouch = memo(() => {
  const mailToHandler = useMailToLink()

  return (
    <PageWrapper columns={2}>
      <div className={textCell}>
        <h1>Get in touch</h1>
        <p>
          I might not be looking for new opportunities right now, but I’m
          always happy to say hello to a new friend. Please feel free to
          reach out and say hi or to ask me more about anything I’ve mentioned
          here. Assuming you are a real person<span className={asterisk}>*</span> and
          not a robot, I’ll try my best to get back to you.
        </p>
        <button className={emailBtn} onClick={mailToHandler}>
          <img src={airplaneUrl} alt="email icon" />
          Send me a message
        </button>
        <span className={footNote}>
          <span className={asterisk}>*</span>Sentient AIs ok;
          anthropomorphism not required.
        </span>
      </div>
      <div>
        <FeaturedImage src={imageUrl} alt="decorative contact information" showBrand />
      </div>
    </PageWrapper>
  )
})

export default GetInTouch