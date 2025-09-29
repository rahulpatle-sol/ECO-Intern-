// this 
//  call 
const contract={
    name:"dj brovo"
};

function  greet (age,city){
    console.log(`hi  i  am ${this.name},  ${age} years old from  ${ city}`)
};


greet.call(contract,21,"indore ")
const hello=greet.apply(contract,[22,"mumbai"]);
const namsate=greet.bind(contract,32,"khargon");
namsate()