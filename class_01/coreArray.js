const marvelHero = ["IronMan","Thor","DoctorStrange"];
const dcHero = ["SuperMan","BatMan","Flash"]

// marvelHero.push(dcHero)
// console.log(marvelHero);// ["IronMan","Thor","DoctorStrange",["SuperMan","BatMan","Flash"]]
// const allHero = marvelHero.concat(dcHero); // ["IronMan","Thor","DoctorStrange","SuperMan","BatMan","Flash"]
// console.log(allHero);
const newAllHero = [...marvelHero, ...dcHero]
console.log(newAllHero); //   ["IronMan","Thor","DoctorStrange","SuperMan","BatMan","Flash"]

const another_Array = [1,2,3,[4,5,6],3,2,[2,2,3,[2,3,4]]];
const New_Another_Array = another_Array.flat(Infinity)
console.log(New_Another_Array); //  [1,2,3,4,5,6,3,2,2,2,3,2,3,4]

console.log(Array.from("Mohit"));

const Score_1 = 100;
const Score_2 = 200;
const Score_3 = 300;
console.log(Array.of(Score_1,Score_2,Score_3)); // [100,200,300]