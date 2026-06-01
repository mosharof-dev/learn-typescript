// References type --> object

// Object
let person: {
  company: string;
  name: string;
  isAdmin: boolean;
  age: number; 
  height?: number; // Optional property         
} = {
  company: "ABC Corp",
  name: "Mosharof",
  isAdmin: false,
  age: 25,
};

// Task 1
let student: {
  name: string;
  age: number;
  isPassed: boolean;
} = {
  name: "Mosharof",
  age: 25,
  isPassed: true,
};

// Task 2
let car: {
brand: string;
model: string;
price: number;

} = {
brand: "BMW",
model: "X5",
price: 50000,
}

// Task 3
let user: {
    name: string;
    email:string;
    phone?:number;
} = {
    name: "Mosharof",
    email: "mosharof.dev@gmail.com"
}
// Task 4
let status: "in-stock" |"out-of-stock";

// Task 5
let product: {
   title: string;
   price: number;
   discount?: number;
   status: "in-stock" |"out-of-stock";
} = {
  title: "PC",
  price: 5000,
  status: "in-stock"

}
