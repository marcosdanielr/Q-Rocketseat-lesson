export default function Modal() {
  const cancelButton = document.querySelector('.button.cancel')
  const modalD = document.querySelector('.modal-wrapper')
  cancelButton.addEventListener('click', close)

  function open() {
    modalD.classList.add('active')
  }
  function close() {
    modalD.classList.remove('active')
  }

  return {
    open,
    close
  }
}
