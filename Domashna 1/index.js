const { readFile, writeFile, appendFile } = require("./read-write");

writeFile("person.txt", "John Doe")
.then(() => {
    return readFile("person.txt");
})
.then ((data) => {
    // console.log(data);
    return appendFile("person.txt", ", 30 year");
})
.then (() => {
    return readFile("person.txt");
})
.then ((data) => {
    console.log(data);
})
.catch ((err) => {
    console.log("ERROR", err);
});