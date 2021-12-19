import React, { memo } from 'react'

import octocat from '@/images/octocat.svg'
import iconSig from '@/images/icon-sig.svg'
import iconHart from '@/images/icon-hart.svg'
import iconQM from '@/images/icon-qm.svg'
import iconCSH from '@/images/icon-csh.svg'
import iconLyriQL from '@/images/icon-lyriql.svg'
import iconOnelineify from '@/images/icon-onelineify.svg'

import RepoLinkItem from '@/components/repo-link-item'
import PageWrapper from '@/components/pages/page-wrapper'

import { repoLinks, profileLink } from './styles.scss'

const WhatIDo = memo(() => {
  return (
    <PageWrapper columns={2}>
      <div>
        <h1>What I do</h1>
        <ul className={repoLinks}>
          <RepoLinkItem
            title="johngnewman.com"
            href="https://github.com/jgnewman/johngnewman.com"
            description="this website"
            iconUrl={iconSig}
            stretchIcon
          />
          <RepoLinkItem
            title="Hart"
            href="https://github.com/jgnewman/hart"
            description="an app framework"
            iconUrl={iconHart}
          />
          <RepoLinkItem
            title="Quartermaster"
            href="https://github.com/jgnewman/quartermaster"
            description="a component library"
            iconUrl={iconQM}
          />
          <RepoLinkItem
            title="CSH"
            href="https://github.com/jgnewman/custom-syntax-highlighter"
            description="a syntax highlighter"
            iconUrl={iconCSH}
          />
          <RepoLinkItem
            title="LyriQL"
            href="https://github.com/jgnewman/lyriql"
            description="an API engine"
            iconUrl={iconLyriQL}
          />
          <RepoLinkItem
            title="Onelineify"
            href="https://github.com/jgnewman/vscode-onelineify"
            description="a VSCode plugin"
            iconUrl={iconOnelineify}
          />
        </ul>
      </div>
      <div>
        <a className={profileLink} href="https://github.com/jgnewman">
          <img src={octocat} alt="github icon" />
          <span>github.com/jgnewman</span>
        </a>
        <p>
          I’m not satisfied that I understand how something works until I
          try to build it for myself. Some of the coolest stuff on my github
          profile consists of me gaining a deeper understanding of current
          technologies by attempting to implement them. For instance, my
          project called “<a href="https://github.com/jgnewman/hart">Hart</a>”
          is a full-featured, component-based engine for DOM manipulation and
          state management, very much like React itself, hooks and all.
        </p>
        <p>
          Because most of these are personal projects, I don’t always keep
          them up-to-date with the latest versions of every library and tool.
          To see a better example of something like that, check out the source
          for <a href="https://github.com/jgnewman/johngnewman.com">this website</a>.
          It’ll give you a good sense of how I put things together.
        </p>
      </div>
    </PageWrapper>
  )
})

export default WhatIDo