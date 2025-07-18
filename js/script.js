const emailList = []


const button = document.getElementById('btn-generator')

button.addEventListener('click', (e) => {
    e.preventDefault()
    const number = document.getElementById('inner');

    for (let i=0; i<10; i++){
    axios.get(`https://flynn.boolean.careers/exercises/api/random/mail`).then((resp)=>{
        emailList.push(resp.data.response);
        number.innerHTML = emailList

    })

}
}) 


 document.getElementById("refresh").addEventListener("click", function() {
    location.reload();

  });


//   creare e sostituire le 10 email create con altre 10 email randomiche

