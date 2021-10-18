/*
document.write("<h1> Hello to page  </h1>");
document.querySelector("h1").style.color = "red";

window.alert("kiss");
*/


/*
console.log(" log ");

console.error("Error")

console.table(["yousef" , "marwan" , "عرص"]);

console.log("hello from %c Js %c html " , "color :red ; font-size:20px ;" ,"color :blue ; font-size:23px ;") 
*/

/*
console.log("youssef");
console.log(typeof "youssef"); //string
console.log(typeof 500); //Number
console.log( typeof 500.4);//Number
console.log(typeof [10, 15 ,17]);//object && Arrary
console.log(typeof ["sd", "ss" ,"as"]);// Arrary
console.log(typeof {name : "yousef" ,age : 17}); //object 
console.log(typeof true); // boolean
console.log(typeof undefined); // undefined
console.log(typeof null); // Object
*/


/*
var user = "youssef" ,
    age = 37 ;

    console.log(user);
    console.log(age);
    */

    /*
    Var
    - Redeclare (Yes)
    - Access Before Declare (Undefined)
    - Variable Scope Drama [Added To Window] ()
    - Block Or Scope Function
  
    Let
    - Redeclare (No => Error)
    - Access Before Declare (Error)
    - Variable Scope Drama ()
    - Block Or Scope Function
  
    Const
    - Redeclare (No => Error)
    - Access Before Declare (Error)
    - Variable Scope Drama ()
    - Block Or Scope Function
  */

    /*
  String Syntax + Character Escape Sequences
  \ Escape + Line Continue
  \n
*/

/*
console.log('Elzero Web "School"');
console.log("Elzero Web 'School'");
console.log("Elzero Web \"School\"");
console.log('Elzero \\ Web \'School\'');
console.log("Elzero \
Web \
School");
console.log("Elzero\nWeb\nSchool");
*/

/*
  Concatenation


let a = "We Love";
let b = "JavaScript";

document.write(a + " " + b);

console.log(a, b);
*/

/*

let a = "We Love";
let b = "JavaScript";
let c = "And";
let d = "Programming";

console.log(a = " \"\" " + b +
"\n" + c + " " + d);

console.log(`${a} "" '' \\ ${b}
${c} ${d}`);

// Second Example

let title = "Elzero";
let desc = "Elzero Web School";

let markup = `
  <div class="card">
    <div class="child">
      <h2>${title}</h2>
      <p>${desc}</p>
    </div>
  </div>
`;

document.write(markup);
*/

/*
let title_project = `
  <div class="title">
   <h4> El zero</h4>
   <p>  El zero web school</p>
   <span> 25 /10 </span>
  </div>
`;

// let main =;

document.querySelector(".divs").innerHTML = title_project.repeat(4);

*/


/*
  Arithmetic Operators
  + Addition
  - Subtraction
  * Multiplication
  / Division
  ** Exponentiation (ES7)
  % Modulus (Division Remainder)
  ++ Increment [ Post / Pre ]
  -- Decrement [ Post / Pre ]
*/
/*
console.log(10 + 20);
console.log(10 + "Osama");

console.log(10 - 20);
console.log(10 - "Osama"); // NaN
console.log(typeof NaN);

console.log(10 * 20);
console.log(10 * -20);

console.log(20 / 5);
console.log(20 / 3);

console.log(2 ** 4);
console.log(2 * 2 * 2 * 2);

console.log(10 % 2);
console.log(11 % 2); // Remove 1

*/

/*
  - + Unary Plus [Return Number If Its Not Number]
  - - Unary Negation [Return Number If Its Not Number + Negates It]
  Tests
  - Normal Number
  - String Number
  - String Negative Number
  - String Text
  - Float
  - Hexadecimal Numeral System => 0xFF
  - null
  - false
  - true

console.log(+100);
console.log(+"100");
console.log(+"-100");
console.log(+"Osama");
console.log(+"15.5");
console.log(+0xff);
console.log(+null);
console.log(+false);
console.log(+true);

console.log(-100);
console.log(-"100");
console.log(-"-100");
console.log(-"Osama");
console.log(-"15.5");
console.log(-0xff);
console.log(-null);
console.log(-false);
console.log(-true);

console.log(Number("100"));
*/


/*
  Assignment Operators


let a = 10;

a = a + 20;

a = a + 70;

a += 100; // a = a + 100

a -= 50; // a = a - 50

a /= 50; // a = a / 50

*/

/*
  Challenge 1

let a = 10;
let b = "20";
let c = 80;


console.log(++a + +b++ + +c++ - +a++);
// (++a -> increase by number 10  11   Increment)
//(+b++  -> String Number 20)
//(+c++ -> Numer 80)
//(+a++ -> Numer none)
*/

/*
console.log(++a + -b + +c++ - -a++ + +a);
(++a -> 11)
(-B -> -20)
(+c++ -> 80)
(- -a++ -> 10)
(+a -> 11)
*/

/*
console.log(--c + +b + --a * +b++ - +b * a + --a - +true);

(--c -> 79 Decrement)
(+b  -> String Number 20)
(--a -> 9 Decrement)

(+b  -> String Number 20)

(a -> 10)
<--a> 9)
(true -> 1)

(--c + +b + --a ->108)

/*
  [++a] [+]
  [++a]
  - Value:
  - Explain:
  [+]
  - Explain:


  Challenge 2


let d = "-100";
let e = "20";
let f = 30;
let g = true;

// Only Use Variables Value
// Do Not Use Variable Twice

console.log( e * -d); // 2000
console.log( -d + f + ++e + ++e); // 173
*/


/*
  Number
  - Double Precision
  - Syntactic Sugar "_"
  - e
  - **
  - With Decimal
  - Number + BigInt
  - Number Min Value
  - Number Max Value

console.log(1000000);
console.log(1_000_000);
console.log(1e6);
console.log(10 ** 6);
console.log(10 * 10 * 10 * 10 * 10 * 10);
console.log(1000000.0);

console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MAX_VALUE);
console.log(Number.MAX_VALUE + 23434343434);
*/


/*
  Number Methods
  - Two Dots To Call A Methods
  - toString()
  - toFixed()
  - parseInt()
  - parseFloat()
  - isInteger() [ES6]
  - isNaN() [ES6]

console.log((100).toString());
console.log(100.10.toString());

console.log(100.554555.toFixed(2));

console.log(Number("100 Osama"));
console.log(+"100 Osama");
console.log(parseInt("100 Osama"));
console.log(parseInt("Osama 100 Osama"));
console.log(parseInt("100.500 Osama"));
console.log(parseFloat("100.500 Osama"));

console.log(Number.isInteger("100"));
console.log(Number.isInteger(100.500));
console.log(Number.isInteger(100));

console.log(Number.isNaN("Osama" / 20));

*/


/*
  Math Object
  - round()
  - ceil()
  - floor()
  - min()
  - max()
  - pow()
  - random()
  - trunc() [Es6]


console.log(Math.round(99.2));
console.log(Math.round(99.5));

console.log(Math.ceil(99.2));
console.log(Math.floor(99.9));

console.log(Math.min(10, 20, 100, -100, 90));
console.log(Math.max(10, 20, 100, -100, 90));

console.log(Math.pow(2, 4));
console.log(Math.random());
console.log(Math.trunc(99.5));
*/                                     


/*
  Number Challenge

let a = 100;
let b = 2_00.5;
let c = 1e2;
let d = 2.4;
/*
// Find Smallest Number In All Variables And Return Integer
console.log(Math.min(a , b , c ,d));
 */

/*
// Use Variables a + d One Time To Get The Needed Output
console.log(a * c); // 10000
*/
/*
// Get Integer "2" From d Variable With 4 Methods
console.log(Math.round(d));
console.log(Math.floor(d));
console.log(Math.trunc(d));
console.log(parseInt(d));
*/
 
/*
// Use Variables b + d To Get This Valus
console.log(((parseInt(b) / Math.ceil(d)).toFixed(2)).toString()); // =>  66.67 string
// => 67
console.log(Number(Math.trunc(parseInt(b) / Math.ceil(d))))
*/

/*
  String Methods
  - Access With Index
  - Access With charAt()
  - length
  - trim()
  - toUpperCase()
  - toLowerCase()
  - Chain Methods


let theName = "  Ahmed  ";

console.log(theName);
console.log(theName[1]);
console.log(theName[5]);

console.log(theName.charAt(1));
console.log(theName.charAt(5));

console.log(theName.length);
console.log(theName.trim());

console.log(theName.toUpperCase());
console.log(theName.toLowerCase());

console.log(theName.trim().charAt(2).toUpperCase());

*/

/*
  String Methods
  - indexOf(Value [Mand], Start [Opt] 0)
  - lastIndexOf(Value [Mand], Start [Opt] Length)
  - slice(Start [Mand], End [Opt] Not Include End)
  - repeat(Times) [ES6]
  - split(Separator [Opt], Limit [Opt])

  
let a = "Elzero Web School";

console.log(a.indexOf("Web"));
console.log(a.indexOf("Web", 8));
console.log(a.indexOf("o")); // 5
console.log(a.lastIndexOf("o")); // 15

console.log(a.slice(2, 6));
console.log(a.slice(-5, -3));

console.log(a.repeat(5));

console.log(a.split("", 6));
*/


/*
  String Methods
  - substring(Start [Mand], End [Opt] Not Including End)
  --- Start > End Will Swap
  --- Start < 0 It Start From 0
  --- Use Length To Get Last Character
  - substr(Start [Mand], Characters To Extract)
  --- Start >= Length = ""
  --- Negative Start From End
  - includes(Value [Mand], Start [Opt] Default 0) [ES6]
  - startsWith(Value [Mand], Start [Opt] Default 0) [ES6]
  - endsWith(Value [Mand], Length [Opt] Default Full Length) [ES6]


let a = "Elzero Web School";

console.log(a.length);

console.log(a.substring(2, 6));
console.log(a.substring(6, 2));
console.log(a.substring(-10, 6)); // 0 - 6
console.log(a.substring(a.length - 5, a.length - 3));

console.log(a.substr(0, 6));
console.log(a.substr(17));
console.log(a.substr(-3));
console.log(a.substr(-5, 2));

console.log(a.includes("Web"));
console.log(a.includes("Web", 8));

console.log(a.startsWith("E"));
console.log(a.startsWith("E", 2));
console.log(a.startsWith("zero", 2));

console.log(a.endsWith("l"));

*/

/*
String Challenge
All Solutions Must Be In One Chain
You Can Use Concatenate

*/
let a = "Elzero Web School";
/*
// Include This Method In Your Solution [slice, charAt]
console.log(a.slice(2, 6));
console.log(a.charAt(2).toUpperCase() + a.slice(3,6));
// Zero

// 8 H
console.log((a.charAt(13).toUpperCase()).repeat(8)); // repeat  HHHHHHHH

// Return Array
console.log(a.slice(0, 6)); // ["Elzero"];
console.log(a.split(" ", 1));

// Use Only "substr" Method + Template Literals In Your Solution
console.log(a.substr(0, 6) + a.substr(10 , 15) ); // Elzero School

// Solution Must Be Dynamic Because String May Changes
console.log( a.slice(0 , 2).toLowerCase() + a.substr(2, 17).toUpperCase()); // eLZERO WEB SCHOOl
*/

/*
  Comparison Operators
  - == Equal
  - != Not Equal

  - === Identical
  - !== Not Identical

  - > Larger Than
  - >= Larger Than Or Equal

  - < Smaller Than
  - <= Smaller Than Or Equal


console.log(10 == "10"); // Compare Value Only
console.log(-100 == "-100"); // Compare Value Only
console.log(10 != "10"); // Compare Value Only

console.log(10 === "10"); // Compare Value + Type
console.log(10 !== "10"); // Compare Value + Type
console.log(10 !== 10); // Compare Value + Type

console.log(10 > 20);
console.log(10 > 10);
console.log(10 >= 10);

console.log(10 < 20);
console.log(10 < 10);
console.log(10 <= 10);

console.log(typeof "Osama" === typeof "Ahmed");

*/

/*
  Logical Operators
  - ! Not
  - && And
  - || Or

console.log(true);
console.log(!true);

console.log(!(10 == "10"));

console.log(10 == "10" && 10 > 8 && 10 > 50);

console.log(10 == "10" || 10 > 80 || 10 > 50);

*/