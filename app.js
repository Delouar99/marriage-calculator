
const age_cheak = document.querySelector('#agecheck');
const name = document.querySelector('#name');
const year = document.querySelector('#year');
const gander = document.querySelector('#gander');
const result = document.querySelector('#result');


age_cheak.addEventListener('click', () =>{

    if(name.value == '' || year.value == '' || gander.value==''){
        
        result.innerHTML = `<p class = 'alert alert-danger text-center'> নাম আর  বয়স  না  দিয়ে চেক করেন কেন?</p>`;

     }else{
        result.innerHTML = agecal(name.value, year.value,gander.value);

        name.value = '';
        year.value = '';
        gander.value = '';
     };



});
 