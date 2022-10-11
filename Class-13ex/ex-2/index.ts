class Logger{
    logRandomNumber() {
        Math.floor(Math.random() * 101)
        console.log(this.logRandomNumber);
    }
    logRandomColor() {
        var colors = ["purple", "red", "blue"];
        var randColor = colors[Math.floor(Math.random() * colors.length)];
        console.log(this.logRandomColor);
    }
    logTo100() {
        for (let i = 0; i < 101; i++) {
            console.log(i);
        }
    }
}

let logger = new Logger();