console.log("1️⃣ Start");
console.log("2️⃣ Processing...");
console.log("3️⃣ End");
// this is a  sycroniztion  process'
 //  line by line exrecution 
 function slowTask() {
  for (let i = 0; i < 500000000; i++) {} // a huge loop
  console.log("🐢 Slow task done!");
}

console.log("1️⃣ Start");
slowTask();
console.log("3️⃣ End");

//  this is not ideal  for  handling data in  large amount 