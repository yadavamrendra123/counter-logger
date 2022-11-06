// 

// let myage=23;
// let humandogratio=7;
// let myDogAge=myage*humandogratio;
// console.log(myDogAge)
let countEl= document.getElementById('count');
let saveEL= document.getElementById('save-log')
let count=0

function increment(){
    count=count + 1;
   countEl.textContent=count;
    console.log(count)
}

function save(){
   let countStr=count+" - ";
   saveEL.textContent+=countStr;
   countEl.textContent=0;
   count=0;
    
}



