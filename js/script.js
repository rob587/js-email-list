const number = document.getElementById('inner');

const emailList = []

for (let i=0; i<10; i++){
    axios.get(`https://flynn.boolean.careers/exercises/api/random/mail`).then((resp)=>{
        emailList.push(resp.data.response);
        number.innerHTML = emailList

    })

}