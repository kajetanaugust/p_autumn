import { mobileMenuVisible } from '../sections/Header/styles.css.ts'

const hamburger = document.getElementById('mobile-menu-hamburger')
const mobileMenu = document.getElementById('mobile-menu')
const html = document.querySelector('html')
const body = document.querySelector('body')

hamburger?.addEventListener('click', () => {
  mobileMenu?.classList.toggle(mobileMenuVisible)
  const isMenuVisible = mobileMenu?.classList.contains(mobileMenuVisible)

  hamburger?.toggleAttribute('aria-expanded', isMenuVisible)

  if (!html || !body) return

  html.style.overflowY = isMenuVisible ? 'hidden' : 'auto'
  body.style.overflowY = isMenuVisible ? 'hidden' : 'auto'
})
