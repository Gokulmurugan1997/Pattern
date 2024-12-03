function HollowSquare(rows2){
    pattern="";
    for(let i=1;i<=rows2;i++){
        if(i===1||i===rows2){
            let stars = "*".repeat(rows2);
            pattern+=stars+"\n"
        }
        else{
            let stars = "*"+" ".repeat(rows2-2)+"*";
            pattern+=stars+"\n"
        }
    }  
    document.getElementById("hollow-pattern").textContent = pattern

}


let rows2 = 5;
HollowSquare(rows2)