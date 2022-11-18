// Write a program that requests a number from a user and finds the summation of every number from 1 to num. For example, for number 4 it is 1 + 2 + 3 + 4 = 10.
// Request two numbers and find only their largest common divisor.
// Request a number and display all the divisors of it. For example, for number 8 it would be 2, 4, and 8.
// Define the number of digits in a requested number. For example, there are 4 digits in the number 6834.
// Request 10 numbers from a user and count, how many are positive, negative, or zero. Also, count odd and even. Display the statistics. There’s only one variable (not 10) needed for input by a user. 
// Loop a calculator. Request 2 numbers and a sign, solve the problem, display the result and ask if the user wants one more. The loop continues until the user refuses. 
// Request a number from a user and ask by how many digits to move it. Move the digits and display the result (if the number 123456 needs to be moved by 2 digits, the result will be 345612).
// Loop day input like this: «Day of the week. Would you like to see the next one?» which continues as long as the user clicks OK.
// Display the multiplication table of all numbers from 2 to 9. Every number has to be multiplied by 1 to 10. 
// “Guess the number” game. Suggest a user to think of a number from 0 to 100 and guess it in the following way: every loop iteration needs to divide the range of numbers in half, you represent the result as N and ask the user “Your number > N, < N or == N?” Depending on what the user said, narrow down the range. So the starting range is 0 to 100, divided in half is 50. If the user said the number is > 50, the next range is 51 to 100, and so on, until the user chooses == N.

//d1
// let num=prompt("Enter a number:")*1;
// let sum=0;
// for(let i=1;i<=num;i++){
//     sum+=i;
// }
// console.log("Sum of 1 to ",num," is ",sum);

//d2
// let x=prompt("First num:");
// let y=prompt("Second num:");
// while(y) {
//     var t = y;
//     y = x % y;
//     x = t;
//   }
// console.log("Largest common division",x);

//d3
// let num=prompt("Enter a num:")*1;
// for(let i=0;i<=num;i++){
//     if(num%i==0){
//         console.log(i);
//     }
// }

//d4
// let num=prompt("Enter a num:")*1;
// let digits=num.toString().length;
// console.log("Num is",digits,"digits");

//d5
// let num;
// let poz=0;
// let neg=0;
// let zero=0;
// let even=0;
// let odd=0;
// for(let i=0;i<10;i++){
//     num=prompt("Enter a number");
//     if(num>0){
//         poz += 1;
//     }else if(num<0){
//         neg += 1;
//     }else if(num==0){
//         zero += 1;
//     }
    
//     if(num%2==0){
//        even += 1;
//     }else {
//         odd += 1;
//     }
// }
// console.log("You have entered:",poz,"pozitiv nums");
// console.log("You have entered:",neg,"negativ nums");
// console.log("You have entered:",zero,"zeros");
// console.log("You have entered:",even,"even nums");
// console.log("You have entered:",odd,"odd nums");


//d6
// let isTrue=true;
// do{
// let a=prompt("Enter first num")*1;
// let b=prompt("Enter second num")*1;
// let op=prompt("Enter operation num");
// if(op=="+"){
//     console.log(a+b);
// }else if(op=="-"){
//     console.log(a-b);
// }else if(op=="/"){
//     console.log(a/b);
// }else if(op=="*"){
//     console.log(a*b);
// }
// let boolean=prompt("Do you wanna continue?");
// boolean=boolean=="yes" ? isTrue=true:isTrue=false;
// }while(isTrue);


//d7
//?

//d8
// let isTrue=true;
// let i=0;
// do {
//     i++;
//     switch(i){
//         case 1:
//             console.log("Monday");
//             break;
//         case 2:
//             console.log("tuesday");
//             break;
//         case 3:
//             console.log("wednesday");
//             break;
//         case 4:
//             console.log("thursday");
//             break;
//         case 5:
//             console.log("friday");
//             break;
//         case 6:
//             console.log("saturday");
//             break;
//         case 7:
//             console.log("sunday");
//             break;
//         default:
//             i=0;
//             continue;
//     }
//     let mes=prompt("Day of the week.Do you wanna see the next one?");
//     mes=mes=="yes" ? isTrue=true:isTrue=false;
// }while(isTrue);

//d9
// for(let i=2;i<=9;i++){
//    for(let j=0;j<=10;j++){
//     console.log(i*j);
//    }
// }

//d10
//?