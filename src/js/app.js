import { authWithEmailAndPassword } from "./auth"


const modal = document.querySelector('.form_auth_block')

const form = document.querySelector('.feedback-form')
const modalBtn = document.querySelector('#login-btn')
const closeModalBtn = document.querySelector('#close-modal')


form.addEventListener('submit', submitForm)
modalBtn.addEventListener('click', openModal)
closeModalBtn.addEventListener('click', closeModal)

function closeModal() {
    modal.classList.toggle('is-hidden')
}
function openModal() {
    modal.classList.toggle('is-hidden')
}
function submitForm(e) {
    e.preventDefault()
    const email = form.email.value
    const password = form.password.value
    authWithEmailAndPassword(email, password)

}

