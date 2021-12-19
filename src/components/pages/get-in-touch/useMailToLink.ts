import { useCallback } from 'react'

const useMailToLink = () => {
  return useCallback(() => {
    const link = document.createElement('a')

    link.setAttribute('style', `
      position: absolute;
      left: -9999%;
      top: -9999%;
    `.replace(/\s+/g, ''))

    // Create a mailto link with a cipher to avoid bots
    // stealing my email address
    const loc = '913lt46r2sc52cr21t3v27g913l8c49'
      .replace(/1/g, 'a')
      .replace(/2/g, 'e')
      .replace(/3/g, 'i')
      .replace(/4/g, 'o')
      .replace(/5/g, 'u')
      .replace(/6/g, ':')
      .replace(/7/g, '@')
      .replace(/8/g, '.')
      .replace(/9/g, 'm')

    link.setAttribute('href', loc)

    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }, [])
}

export default useMailToLink