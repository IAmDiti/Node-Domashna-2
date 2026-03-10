const studenti = [
  { ime: "Bojan", prosek: 7.5, grad: "Skopje" },
  { ime: "Pero", prosek: 8.3, grad: "Bitola" },
  { ime: "Janko", prosek: 6.9, grad: "Bitola" },
  { ime: "Vesna", prosek: 9.2, grad: "Skopje" },
  { ime: "Elena", prosek: 9.9, grad: "Kumanovo" },
  { ime: "Vancho", prosek: 10, grad: "Tetovo" },
  { ime: "Elena", prosek: 9.9, grad: "Ohrid" },
  { ime: "Ivana", prosek: 6.9, grad: "Kumanovo" },
  { ime: "Natasha", prosek: 8.1, grad: "Skopje" },
  { ime: "Stanko", prosek: 7.2, grad: "Strumica" },
];

// const task1 = studenti.filter((studenti) => {
//     return (
//         studenti.grad === "Skopje" &&
//         // studenti.ime.endsWith("a") &&
//         studenti.prosek > 6
//     );
// })

// // task1.sort((a, b) => b.ime.localeCompare(a.ime));
// task1.sort((a, b) => b.prosek - a.prosek);

// console.log(task1);

// TASK 2
// const task2 = studenti.filter((studenti) => {
//     return (
//         studenti.grad !== "Skopje" && 
//         studenti.prosek > 9
//     );
// })

// task2.sort((a, b) => b.prosek - a.prosek);

// console.log(task2);

//TASK 3


// const task3 = studenti.filter((studenti) => {
//     return studenti.ime.length === 5;
// }

// );

// task3.sort((a, b) => b.prosek - a.prosek)

// const firstThree = task3.slice(0, 3);



// console.log(firstThree);

//TASK 4

// const grouped = studenti.reduce((acc, student) => {
//     const city = student.grad;

//     if(!acc[city]) {
//         acc[city] = [];
//     }

//     acc[city].push(student);

//     return acc;
// }, {});

// console.log(grouped);


///DOmashna


