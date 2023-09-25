'use strict'

const openModal = () => document.getElementById('modal')
    .classList.add('active')

const closeModal = () => document.getElementById('modal')
    .classList.remove('active')

const tempCliente = {
    nome: 'Zidany teixeira',
    email: 'Zidany@gmail.com',
    celular: '111111111',
    cidade: 'Amontada'
}

// CRUD - create, read, update, delete

const createCliente = (cliente) => {
    // localStorage.setItem(chave, o valor da chave)
    const db_cliente = JSON.parse(localStorage.getItem('db_cliente'))
    db_cliente.push(cliente)
    localStorage.setItem("db_cliente", JSON.stringify(db_cliente));
    console.log(createCliente)
}

document.getElementById('cadastrarCliente')
    .addEventListener('click', openModal)

document.getElementById('modalClose')
    .addEventListener('click', closeModal)