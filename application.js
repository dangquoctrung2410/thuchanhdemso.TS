var Application = /** @class */ (function () {
    function Application(name) {
        this.name = name;
        Application.count++;
    }
    Application.count = 0;
    return Application;
}());
console.log(Application.count);
var app1 = new Application("APP One");
console.log(Application.count);
var app2 = new Application("APP Two");
console.log(Application.count);
