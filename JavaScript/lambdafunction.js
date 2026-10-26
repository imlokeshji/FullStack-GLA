// Arrow Fuction



// const add = (a,b)=>{return a+b;}
// const add=(a,b) => a+b;

// console.log(add(5,6));


const checkarmstrong= (num)=>{
let copy = num;
let power = 0;

while(copy>0){
    copy = Math.floor(copy/10);
    power = power+1;
}

copy = num;
let sum = 0;
while(copy>0){
    let l = copy%10;
    sum = sum + (l**power);
    copy = Math.floor(copy/10);
    
}

if(num == sum){
    return true;
}else{
    return false;
}
}

// function armstrong(){
//     let num = Number(document.getElementById("val").value);
//     if(checkarmstrong(num)){
//         document.getElementById("result").innerHTML = "this number is armstrong";
//     }else{
//         document.getElementById("result").innerHTML = " this is not a armstrong number";
//     }
// }

function armstrong(){
    let num = Number(document.getElementById("val").value);
    let para = document.createElement("p");

    if(checkarmstrong(num)){
        para.textContent= "this number is armstrong";
    }else{
        para.textContent= "this is not a armstrong number";
    }
    document.body.appendChild(para);

}
