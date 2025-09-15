import { modalHidden, modalVisible } from '@components/Modal/styles.css.ts'
import { mobileMenuVisible } from '@sections/Header/styles.css.ts'

const mobileMenu = document.getElementById('mobile-menu')
const contactModal = document.getElementById('contact-modal')
const contactButton = document.querySelectorAll(
  '[data-trigger="contact-modal"]'
)

const toggleModal = (modal: HTMLElement): void => {
  const isCurrentlyVisible = modal.classList.contains(modalVisible)

  if (isCurrentlyVisible) {
    modal.classList.remove(modalVisible)
    modal.classList.add(modalHidden)
    history.pushState(null, '', '/')
  } else {
    modal.classList.remove(modalHidden)
    modal.classList.add(modalVisible)
    mobileMenu?.classList.remove(mobileMenuVisible)

    history.pushState(null, '', '#formularz-kontaktowy')
  }
}

contactButton?.forEach(button =>
  button.addEventListener('click', () => {
    if (!contactModal) return
    toggleModal(contactModal)
  })
)
