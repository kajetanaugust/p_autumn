import { mobileMenuVisible } from '../sections/Header/styles.css.ts'

const hamburger = document.getElementById('mobile-menu-hamburger')
const mobileMenu = document.getElementById('mobile-menu')
const html = document.querySelector('html')
const body = document.querySelector('body')

function closeMobileMenu() {
  if (!mobileMenu || !hamburger || !html || !body) return

  mobileMenu.classList.remove(mobileMenuVisible)
  hamburger.setAttribute('aria-expanded', 'false')
  html.style.overflowY = 'auto'
  body.style.overflowY = 'auto'
}

hamburger?.addEventListener('click', () => {
  mobileMenu?.classList.toggle(mobileMenuVisible)
  const isMenuVisible = mobileMenu?.classList.contains(mobileMenuVisible)

  hamburger?.toggleAttribute('aria-expanded', isMenuVisible)

  if (!html || !body) return

  html.style.overflowY = isMenuVisible ? 'hidden' : 'auto'
  body.style.overflowY = isMenuVisible ? 'hidden' : 'auto'
})

mobileMenu?.addEventListener('click', event => {
  const target = event.target as HTMLElement
  const clickedButton = target.closest('a[href]')

  if (clickedButton) {
    closeMobileMenu()
  }
})
