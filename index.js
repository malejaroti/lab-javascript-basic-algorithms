// Iteration 1: Names and Input
let hacker1 = "Alejandra"
console.log(`The driver's name is ${hacker1}`)
let hacker2 = "Mael"
console.log(`The navigator's name is ${hacker2}`)

// Iteration 2: Conditionals

if (hacker2.length < hacker1.length)
{
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
} else if ( hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
} else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
}
// Iteration 3: Loops
let hacker1UpperCase = ""
for(let i = 0; i < hacker1.length; i++){
    hacker1UpperCase += hacker1[i].toUpperCase() + " ";
}
console.log(hacker1UpperCase)

let hacker2Reversed = "";
// for(let i = 0 ; i < hacker2.length; i++){
//     hacker2Reversed += hacker2[hacker2.length - 1 - i]
// }
// console.log(hacker2Reversed)

for(let i = (hacker2.length-1); i >= 0; i--){
    hacker2Reversed += hacker2[i]
}
console.log(hacker2Reversed)

// Excercise #3
// hacker2 = "Alejandro"
// hacker2 = "Ale"

let hackerHigherLexOrder = ""
let symbol =""
let iter = 0

let hackerWithShortestName = hacker1.length < hacker2.length ? hacker1:hacker2
let selectedLength = hackerWithShortestName.length
console.log(`Length of the shortest name is ${selectedLength} (${hackerWithShortestName})`)

for(let i = 0; i < selectedLength ; i++ ){
    iter = i + 1;
    if(hacker1[i] < hacker2[i]){
        hackerHigherLexOrder = hacker1;
        // console.log(`${iter})  ${hacker1[i]} (${hacker1[i].charCodeAt(0)}) is before ${hacker2[i]} (${hacker2[i].charCodeAt(0)})`)
        break;
    }else if(hacker1[i] > hacker2[i]){
        hackerHigherLexOrder = hacker2;
        // console.log(`${iter})  ${hacker1[i]} (${hacker1[i].charCodeAt(0)}) is after ${hacker2[i]} (${hacker2[i].charCodeAt(0)})`)
    }else{
        hackerHigherLexOrder = hackerWithShortestName
        // console.log(`${iter})  ${hacker1[i]} (${hacker1[i].charCodeAt(0)}) = ${hacker2[i]} (${hacker2[i].charCodeAt(0)})`)
    }
}

if(hackerHigherLexOrder === hacker1){
    console.log(`The driver's name goes first.(${hackerHigherLexOrder})`)
}else if(hackerHigherLexOrder === hacker2){
    console.log(`Yo, the navigator goes first, definitely.(${hackerHigherLexOrder})`)
}else{
    console.log("What?! You both have the same name?")
}