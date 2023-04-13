function ignoreHydrationWarning() {
  if (!window || !window.console) return

  const prevConsoleError = window.console.error
  window.console.error = (...args) => {
    if (args[0].includes('Warning: Extra attributes from the server')) {
      return
    }

    return prevConsoleError.apply(window.console, args)
  }
}

const innerHTML = { __html: `(${String(ignoreHydrationWarning)})()` }

/**
 * SyncColorScheme causes react SSR hydration to complain
 *   because we add class names and styles between render and hydration.
 *   until we solve long term, suppress warnings.
 */
function IgnoreHydrationWarning() {
  if (process.env.NODE_ENV !== 'development') {
    // hydration warnings only log in development environment
    return null
  }

  return <script dangerouslySetInnerHTML={innerHTML} />
}

export { IgnoreHydrationWarning }
