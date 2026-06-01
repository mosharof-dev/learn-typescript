// Learning typeScript function

function add(num:number, num1:number):number{
    return num + num1;
}

add(2, 5)

const users =(num:number, num1:number):number => num + num1 

// object --> function --> method

const user = {
    name: "Mosharof",
    balance:0,
    addBalance(balance: number): string {
        return `My new balance is ${this.balance + balance} `
    }
}

const arr : number[] = [1, 2, 3, 4, 5]

const newArr = arr.map((num: number): number => num * num)


function multiply(num: number, num1: number): number {
    return num * num1
}
multiply(2, 5)


function userInfo(name: string, age?: number): string {
    return `My name is ${name} and I am ${age} years old.`
}
userInfo("Mosharof", 25)
userInfo("Mosharof")

type LoginFunction = (email: string, password: string) => boolean;

const login: LoginFunction = (email, password) => {
    // Implement your login logic here
    
    if (email === "admin@gmail.com" && password === "1234"  ) {
        return true;
    }
    return false;
};

