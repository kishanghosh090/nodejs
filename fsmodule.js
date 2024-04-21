const fs = require('fs')

// fs.readFileSync('file.txt', 'utf8', (err, data) => {
//     console.log(err,data);
// })
// setTimeout(() => {
//     console.log("finish reading file");
// },2000);

// const a = fs.readFileSync('file.txt')
// console.log(a.toString());

// fs.writeFile('file2.txt', "this is a data from akash", () => {
//     console.log('written to the file')
// })
const b = fs.writeFileSync('file2.txt', "this is a data from akash which is sec");
console.log(b)

console.log("finish reading file");