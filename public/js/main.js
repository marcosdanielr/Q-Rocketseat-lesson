import Modal from './modal.js'

const modal = Modal()

const modalTittle = document.querySelector('.modal h2')
const modalDescription = document.querySelector('.modal p')
const modalButton = document.querySelector('.modal button')

const checkButtons = document.querySelectorAll('.actions a.check')

checkButtons.forEach(button => {
  button.addEventListener('click', modalOpen)
})

const deleteButton = document.querySelectorAll('.actions a.delete')

deleteButton.forEach(button => {
  button.addEventListener('click', event => modalOpen(event, false))
})

function modalOpen(event, check = true) {
  event.preventDefault()

  const slug = check ? 'check' : 'delete'
  const roomId = document.querySelector('#room-id').dataset.id
  const questionId = event.target.dataset.id

  const form = document.querySelector('.modal form')
  form.setAttribute('action', `/question/${roomId}/${questionId}/${slug}`)

  modalTittle.innerHTML = check ? 'Marcar como lida' : 'Excluir esta pergunta'
  modalDescription.innerHTML = check
    ? 'Digite a senha da sala para marcar esta mensagem como lida'
    : 'Digite a senha da sala para excluir esta mensagem'
  modalButton.innerHTML = check ? 'Marcar' : 'Excluir'
  check ? modalButton.classList.remove('red') : modalButton.classList.add('red')

  modal.open()
}
