// Basics Data Type

/**
 
Primitive
---------
number
string
boolean
null
undefined


Non Primitive
-------------
array
object
tuple


TypeScript Special Types
------------------------
any
unknown
union
literal
enum
void
never 

**/



// ==============================
// Primitive Types length (5)
// ==============================

// String
let name: string = 'Mosharof Hossain';

// Number
let age: number = 20;

// Boolean
let isAdmin: boolean = false;

// null
const data: null = null;

// undefined 
const value: undefined = undefined;


// ==============================
// Non Primitive Types Length (3)
// ==============================

// array
let users: string[] = ["a", "b", "c"];

// object
let user: { name: string; age: number } = {
  name: "Mosharof",
  age: 25,
};

// tuple
let person: [string, number] = ["Mosharof", 25];


// =====================================
// TypeScript Special Types Length (7)
// =====================================

// any
let anything: any = "hello";

// unknown
let unknownValue: unknown = "hello";

// union
let id: string | number = 1;

// literal
let status: "success" = "success";

// enum
enum Role {
  ADMIN,
  USER,
}

// void
function printMessage(): void {
  console.log("Hello");
}

// never
function throwError(): never {
  throw new Error("Error");
}