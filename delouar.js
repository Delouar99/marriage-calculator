
// Married Function...................


function agecal (name,year,gander){

    let date = new Date();
   let age =  date.getFullYear() - year;

   let ageStatus = AssisnageStatus (age);

 
   return `<p class = 'alert alert-${ageStatus.status} '> HI ${name} you are ${age} years old & you are ${gander}  so ${ageStatus.name}</p>`;

}

function AssisnageStatus (age){
  if(age > 0 && age < 10 ){
      return{
          name : 'tomi ekon o bassa aso',
          status : 'secondary'
      };
  }else if(age >= 10 && age < 18){
      return{
        name : 'beyer boyos ekon o onek bki',
        status : 'success'
      };
  }else if(age >= 18 && age < 30){
    return{
      name : ' apnar beye boios hoyeche',
      status : 'primary'
    };
}else if(age >= 30 && age < 60){
    return{
      name : 'apne ekon o beye koren ny boios to sesh',
      status : 'warning'
    };
}else if(age >= 60 && age < 100){
    return{
      name : 'apne beddo hoye gachen beye boios ekeber e sesh',
      status : 'danger'
    };
}else{
    return{
        name : 'manos eto bochor bache na',
        status : 'dark'
    };
}

};