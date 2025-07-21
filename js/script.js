// creo array vuota

const emailList = []

// recupero elemento del bottone
const button = document.getElementById('btn-generator')

// aggiungo evento click
button.addEventListener('click', (e) => {
  e.preventDefault()

  // svuoto l'array dentro l'evento per creare altre 10 email sostituendo le 10 già esistenti
  emailList.length = 0

  const number = document.getElementById('inner');

  // creato ciclo per generare 10 email randomiche

  for (let i = 0; i < 10; i++) {
    axios.get(`https://flynn.boolean.careers/exercises/api/random/mail`).then((resp) => {
      emailList.push(resp.data.response);
      number.innerHTML = emailList.map(email => `<li>${email}</li>`).join('')

    })

  }
})

// recuperato bottone di refresh per ricaricare la pagina

document.getElementById("refresh").addEventListener("click", function () {
  location.reload();

});


