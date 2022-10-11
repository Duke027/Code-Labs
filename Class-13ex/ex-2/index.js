var Logger = /** @class */ (function () {
    function Logger() {
    }
    Logger.prototype.logRandomNumber = function () {
        Math.floor(Math.random() * 101);
        console.log(this.logRandomNumber);
    };
    Logger.prototype.logRandomColor = function () {
        var colors = ["purple", "red", "blue"];
        var randColor = colors[Math.floor(Math.random() * colors.length)];
        console.log(this.logRandomColor);
    };
    Logger.prototype.logTo100 = function () {
        for (var i = 0; i < 101; i++) {
            console.log(i);
        }
    };
    return Logger;
}());
var logger = new Logger();
