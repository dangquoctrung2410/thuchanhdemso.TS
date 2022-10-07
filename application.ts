class Application {
    private name: string;
    static count:number = 0;

    constructor(name:string) {
        this.name = name;
        Application.count++;
    }
}
console.log(Application.count);
let app1 = new Application("APP One");
console.log(Application.count);
let app2 = new Application("APP Two");
console.log(Application.count);

