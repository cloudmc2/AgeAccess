const myAge = document.getElementById("inputAge");
const submit = document.getElementById("submit");

let Age;
submit.onclick = function(){

    Age = myAge.value;
    if(Age>= 100){

        alert(`${Age}? Boomer`);
    }
    else if(Age == 0){
    
        alert(`${Age}? please select a valid age`);
    }
    else if(Age >= 18){
    
        alert(`you may enter the website!`);
        window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
    }
    else {
        alert(`your age is ${Age}. you must be 18+ to enter this site!`);
        window.open("https://www.google.com/search?client=opera-gx&hs=chZ&sca_esv=95493269825c3f0f&q=cat+images&udm=2&fbs=ABzOT_CWdhQLP1FcmU5B0fn3xuWpA-dk4wpBWOGsoR7DG5zJBpwxALD7bRaeOIZxqOFEngxxsUnG07Fj19ytIn9fWqb4sDjxelNUNq0MnGNTvDqYWgEUkp0YHdVxbWr4arEYI0A-9T3hEf7j8afo8Qqr0ahVX5ht8_5rn3axFrf3YrgOB4kmVELVOP6cKIX0bdzQxUrJhHIHagr-1t5vbFY8LmR9ZIukOg&sa=X&ved=2ahUKEwiLuNvPzJ2LAxVRr1YBHb8BKH0QtKgLegQIFxAB&biw=1879&bih=974&dpr=1");
    }



}
