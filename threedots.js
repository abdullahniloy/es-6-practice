const ages = [12, 14, 16, 14, 17];
const ages2 = [23, 32, 34, 14, 67, 24,]
const ages3 = [23, 32, 34, 14, 67, 24,]
const allAges = ages.concat(ages2).concat([5]).concat(ages3); // array add korte 

// spread operator diye aro cleaner kore kora jay

const allAges2 = [...ages,...ages2, 1 , ...ages3];


//console.log(allAges);
//console.log(allAges2);


const business = 650;
const minister = 450;
const sochib = 250;
//const maximum = Math.max(business,minister,sochib);
//console.log(maximum);

//jodi array diye kori
const takaPoisa = [650, 450, 250];
const maximum = Math.max(...takaPoisa);
console.log(maximum);


