const Person = {name: 'Jack William',age: 17, job:'Faceboker',GfName:'Natalia Star',phone:24224224, friends:['Elon Musk','tom hanks'] };
//const GfName = Person.GfName;
//const phone = Person.phone


// const {phone,GfName,age,salary} = Person;
// console.log(GfName, phone,age, salary);
const friends = ["khan", "kan", "niloy","nil"];
const [sutoFriend, nextFried,...restFriend] = friends;
console.log(restFriend);