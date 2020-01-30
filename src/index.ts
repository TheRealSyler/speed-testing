// import {
//   SassFormatter,
//   SassTextDocument
// } from '../packages/first_package/node_modules/sass-formatter';
// import { SassFormatter as SassFormatter2 } from '../packages/second_package/node_modules/sass-formatter';
// import { readFileSync } from 'fs';

import express from 'express';
import { join } from 'path';
require('dotenv').config();

const app = express();
const router = express.Router();

const path = join(__dirname, 'public');
const port = process.env.PORT;
console.log(path);
router.use(function(req, res, next) {
  console.log('/' + req.method);
  next();
});

app.use(express.static(path));
app.use('/', router);

app.listen(port, function() {
  console.log('Example app listening on port', port);
});

// class Main {
//   constructor(cases: { func: () => void; name: string }[], public loops: number) {
//     console.log('START');
//     cases.forEach(Case => {
//       this.test(Case.func, Case.name);
//     });
//   }
//   test(func: () => any, text: string) {
//     const start = process.hrtime.bigint();
//     for (let i = 0; i < this.loops; i++) {
//       func();
//     }
//     const totalTime = (process.hrtime.bigint() - start) / BigInt(1e6);
//     console.log(
//       text,
//       totalTime.toString(),
//       'milliseconds',
//       'Average:',
//       (totalTime / BigInt(this.loops)).toString(),
//       'milliseconds'
//     );
//   }
// }

// const text = readFileSync('src/text.sass').toString();

// const test = '\x1b[1;38;2;255;0;0mTEST\x1b[38;2;5;24;159m TEST\x1b[0m';
// const testArr = [test, test + test, test];

// const two_d = [
//   [1, 2, 3],

//   [7, 8, 9]
// ];

// new Main(
//   [
//     {
//       func: () => {
//         return getColumn(two_d, 1);
//       },
//       name: 'FUNC'
//     },
//     {
//       func: () => {
//         return arrayColumn(two_d, 1);
//       },
//       name: 'MAP'
//     }
//   ],
//   1000000
// );

// function getColumn(matrix: number[][], col: number) {
//   const column: number[] = [];
//   for (let i = 0; i < matrix.length; i++) {
//     column.push(matrix[i][col]);
//   }
//   return column;
// }
