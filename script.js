
let formUser = document.querySelector('#formUser')

formUser.onsubmit = function(e) {
  e.preventDefault()

  let error = false

  let inputNameUser = document.forms['formUser']['name']

  if(!inputNameUser.value) {
    error = true
    inputNameUser.classList.add('inputError')
  } else {
    inputNameUser.classList.remove('inputError')
  }
  
  let inputEmailUser = document.forms['formUser']['email']

  if(!inputEmailUser.value) {
    error = true
    inputEmailUser.classList.add('inputError')
  } else {
    inputEmailUser.classList.remove('inputError')
  }
  
  let inputCpf = document.forms['formUser']['cpf']

  if(!inputCpf.value) {
    error = true
    inputCpf.classList.add('inputError')
  } else {
    inputCpf.classList.remove('inputError')
  }
  
  let inputGender = document.forms.formUser.gender
  let inputGenderBox = document.querySelector('.gender')

  if(inputGender[0].checked == false && inputGender[1].checked == false) {
    error = true
    inputGenderBox.classList.add('inputError')
  } else {
    inputGenderBox.classList.remove('inputError')
  }
  
  if(!error) {
    formUser.submit()
  }
}

let formFriend = document.querySelector('#formFriend')

formFriend.onsubmit = function (e) {
  e.preventDefault()

  let error = false

  let inputNameFriend = document.forms['formFriend']['friendName']

  if(!inputNameFriend.value) {
    error = true
    inputNameFriend.classList.add('inputError')
  } else {
    inputNameFriend.classList.remove('inputError')
  }
  
  let inputEmailFriend = document.forms['formFriend']['friendEmail']

  if(!inputEmailFriend.value) {
    error = true
    inputEmailFriend.classList.add('inputError')
  } else {
    inputEmailFriend.classList.remove('inputError')
  }

  if (!error) {
    formFriend.submit()
  }
}

function transformJson(response) {
  return response.json()
}

function createBoxes(data) {

  const boxes = data.products
  
  let boxesFor = []

  boxes.forEach(function(product){
    boxesFor.push(
      `
        <div class="product">
          <div>
            <img src=${product.image}>
          </div>
          <div>
            <h6>${product.name}</h6>
            <p>${product.description}</p>
            <span>De R$ ${product.oldPrice}</span>
            <h5>Por R$ ${product.price}</h5>
            <span>ou ${product.installments.count} x de R$ ${product.installments.value}</span>
            <button>Comprar</button>
          </div>
        </div>
      `)
  })

  document.querySelector('.products').innerHTML = boxesFor.join('')

  
}

const buttonProducts = document.querySelector('#button')
const nextProducts = document.querySelector('#nextProducts')

let url = 'https://frontend-intern-challenge-api.iurykrieger.vercel.app/products?page=1'

 
fetch(url)
  .then(transformJson)
  .then(createBoxes)

  buttonProducts.addEventListener('click', () => {
    nextProducts.href = data.nextPage
  })