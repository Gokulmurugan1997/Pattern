function Square(rows1){
    pattern="";
    for(let i=1;i<=rows1;i++){
        let stars="*".repeat(rows1)
        pattern+=stars+"\n"
    }
    document.getElementById("square-pattern").textContent = pattern
}
let rows1=5
Square(rows1)