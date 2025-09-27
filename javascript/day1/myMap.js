//  my  custom  map  

function myMap(arr,callback){
    const result=[]
    for(let i=0 ;i<arr.length;i++){
        result.push(callback(arr[i],arr))
    }
    return result;

}


const numbers=[1,3,4,6,7];
const squre=myMap(numbers,function(num){

   return  num*num
} )
console.log(squre)