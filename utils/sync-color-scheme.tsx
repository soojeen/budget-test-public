import { theme } from '@react-spectrum/theme-default'

const lightClassInterpolation = theme?.light?.['spectrum--light']!
const nightClassInterpolation = theme?.dark?.['spectrum--darkest']!

function syncColorScheme() {
  var c = document.documentElement.classList
  var s = document.documentElement.style
  var n = window.matchMedia('(prefers-color-scheme: dark)')
  var l = 'lightClassInterpolation'
  var nc = 'nightClassInterpolation'
  function u() {
    if (!l || !nc) return
    if (n.matches) {
      c.remove(l)
      c.add(nc)
      s.colorScheme = 'dark'
    } else {
      c.remove(l)
      c.add(nc)
      s.colorScheme = 'light'
    }
  }
  u()
  n.addEventListener('change', u)
}
const stringWithReplacements = String(syncColorScheme)
  .replace('lightClassInterpolation', lightClassInterpolation)
  .replace('nightClassInterpolation', nightClassInterpolation)
const innerHTML = { __html: `(${stringWithReplacements})()` }

/**
 * solves night/light theme flicker when loading SSR page
 *   Server compiles default light theme. this components injects script
 *   to block render to determine proper theme selection.
 *   applies relevant class name and style to html element.
 */
function SyncColorScheme() {
  return <script dangerouslySetInnerHTML={innerHTML} />
}

export { SyncColorScheme }
