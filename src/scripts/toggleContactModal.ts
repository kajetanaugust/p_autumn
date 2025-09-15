import { modalHidden, modalVisible } from '@components/Modal/styles.css.ts'

const contactModal = document.getElementById('contact-modal')
const contactButton = document.querySelectorAll(
  '[data-trigger="contact-modal"]'
)

const toggleModal = (modal: HTMLElement): void => {
  const isCurrentlyVisible = modal.classList.contains(modalVisible)

  if (isCurrentlyVisible) {
    modal.classList.remove(modalVisible)
    modal.classList.add(modalHidden)
  } else {
    modal.classList.remove(modalHidden)
    modal.classList.add(modalVisible)
  }
}

contactButton?.forEach(button =>
  button.addEventListener('click', () => {
    if (!contactModal) return
    toggleModal(contactModal)
  })
)
