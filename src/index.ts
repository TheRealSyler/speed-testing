import {
  SassFormatter,
  SassTextDocument
} from '../packages/first_package/node_modules/sass-formatter';
import { SassFormatter as SassFormatter2 } from '../packages/second_package/node_modules/sass-formatter';
import { readFileSync } from 'fs';

class Main {
  constructor(cases: { func: () => void; name: string }[], public loops: number) {
    console.log('START');
    cases.forEach(Case => {
      this.test(Case.func, Case.name);
    });
  }
  test(func: () => any, text: string) {
    const start = process.hrtime.bigint();
    const times = [];
    for (let i = 0; i < this.loops; i++) {
      const inner_start = process.hrtime.bigint();
      func();
      times.push((process.hrtime.bigint() - inner_start) / BigInt(1e6));
    }
    console.log(
      text,
      ((process.hrtime.bigint() - start) / BigInt(1e6)).toString(),
      'milliseconds',
      'Average:',
      getAvg(times).toString(),
      'milliseconds'
    );
  }
}

const text = readFileSync('src/text.sass').toString();

new Main(
  [
    {
      func: () => {
        SassFormatter2.Format(text);
      },
      name: 'NEW'
    },
    {
      func: () => {
        SassFormatter.Format(new SassTextDocument(text), { insertSpaces: true, tabSize: 4 });
      },
      name: 'OLD'
    }
  ],
  1000
);

function getAvg(grades) {
  const total = grades.reduce((acc, c) => acc + c, 0n);
  return total / grades.length;
}
