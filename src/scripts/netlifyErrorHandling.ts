window.addEventListener(
  'error',
  function (e) {
    if (e.filename && e.filename.includes('netlify/scripts/rum')) {
      e.preventDefault()
    }
  },
  true
)

window.addEventListener('unhandledrejection', function (e) {
  if (e.reason && String(e.reason).includes('netlify')) {
    e.preventDefault()
  }
})
