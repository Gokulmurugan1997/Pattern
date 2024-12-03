function InverseRightAngleTriangle(rows) {
    let pattern = "";
    for (let i = rows; i >= 1; i--) {
        let stars = "*".repeat(i);
        pattern += stars + "\n";
    }
    document.getElementById("star-pattern").textContent = pattern;
}

const rows = 5;
InverseRightAngleTriangle(rows);
