
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

console.log(formFriend)

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