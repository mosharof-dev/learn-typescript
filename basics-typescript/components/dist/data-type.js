"use strict";
// Basics Data Type
Object.defineProperty(exports, "__esModule", { value: true });
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
let name = 'Mosharof Hossain';
// Number
let age = 20;
// Boolean
let isAdmin = false;
// null
const data = null;
// undefined 
const value = undefined;
// ==============================
// Non Primitive Types Length (3)
// ==============================
// array
let users = ["a", "b", "c"];
// object
let user = {
    name: "Mosharof",
    age: 25,
};
// tuple
let person = ["Mosharof", 25];
// =====================================
// TypeScript Special Types Length (7)
// =====================================
// any
let anything = "hello";
// unknown
let unknownValue = "hello";
// union
let id = 1;
// literal
let status = "success";
// enum
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["USER"] = 1] = "USER";
})(Role || (Role = {}));
// void
function printMessage() {
    console.log("Hello");
}
// never
function throwError() {
    throw new Error("Error");
}
