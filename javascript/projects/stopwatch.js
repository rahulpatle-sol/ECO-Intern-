

let stopTime=0;
let starttime=5;

setInterval(function(){
    if(starttime>0){
        starttime--;    
        console.log(starttime);
    }else{
        stopTime++;
        console.log("Stopwatch: "+stopTime+" seconds");
    }
}
,1000);



