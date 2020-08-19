// function doubleIt(num){
//     return num * 2;
// }
// const result = doubleIt(5);

//es-6 e function lekhar rules
const doubleIt = num => num*2;
// parameter jodi ekadhik thake
const add = (x , y) => x + y;

const give5 = () => 5; // jodi kono parameter na thake
const doMath = (x,y) =>{
    const sum = x + y;
    const diff = x - y;
    const result = sum * diff;
    return result;
}
const result = doubleIt(50);

const result2 = add(5,2);
const result3 = give5();
const result4 = doMath(7,5)


console.log(result4);