const dictionary = (word)=>{
    // const url = 'https://dictionary-by-api-ninjas.p.rapidapi.com/v1/dictionary?word=bright';
 const options = {
     method: 'GET',
     headers: {
         'X-RapidAPI-Key': '2036b5608amsh94d70593c7ed9ecp19a400jsn5a2aba7b5035',
         'X-RapidAPI-Host': 'dictionary-by-api-ninjas.p.rapidapi.com'
     }
 };
 

 
     fetch('https://dictionary-by-api-ninjas.p.rapidapi.com/v1/dictionary?word=' + word, options)
     .then(response => response.json())
     .then((response) => {                  
        


         console.log(response);
         wordheading.innerHTML = "Meaning of:" + response.word;
         definition.innerHTML = response.definition.replace("2.", "<br>2.").replace("3.","<br>3.").replace("4.","<br>4.");
         console.log(word, response);
     })
     .catch(err => console.error(err));
 }
 
 searchbtn.addEventListener("click", (e)=>{
         e.preventDefault();
         dictionary(searchinput.value)
 })