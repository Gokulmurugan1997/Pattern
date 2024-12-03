function Pyramid(row){
    pattern="";
    for(let i=1;i<=row;i++){
        let spaces = " ".repeat(row-i);
        let stars="*".repeat(2*i-1)
        pattern+=spaces+stars+"\n"
    }
    document.getElementById("pyramid-pattern").textContent = pattern
}

const row = 5;
    Pyramid(row);


