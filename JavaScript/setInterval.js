// var counter =0;
// setInterval(()=>{
//     counter++;
//     console.log(counter+" seconds have passed");
// },1000);
var counter =0;
let interval = setInterval(()=>{
        counter++;
        console.log(counter+" seconds have passed");
        if(counter+1 === 5){
            console.log("5 seconds have passed, stopping the interval");
            clearInterval(interval);
        }
        
        },1000);

    