let num = math.floor(math.random() * 101);
function numCheck() {
    if (num <= 50) {
        console.log("less than or equal to 50");
    } else {
        console.log("greater than 50");
    }
}
numCheck(num);