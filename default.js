function add(num1, num2 = 0){ // es-6 e direct default dilei hoy
    // if(num2 == undefined){
    //     num2 = 0;
    // }
    return num1 + num2;
}
//const total = add(15,17);
// if u want call with one number
const total = add(15);

console.log(total);