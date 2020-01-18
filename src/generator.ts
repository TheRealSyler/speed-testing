import { Random } from 'suf';
import { all } from 'known-css-properties';
import { writeFileSync } from 'fs';

let text = '';

function GenerateBadSass(lines: number) {
  for (let i = 0; i < lines; i++) {
    if (i % 10 === 0) {
      const className = getRandomString();
      text += `${getEmptySpace()}\n${getEmptySpace()}.${className}\n`;
    } else if (i % 9 === 0) {
    } else {
      const propName = all[Math.round(Math.random() * all.length)];
      text += `${getEmptySpace()}${propName}:${getEmptySpace(4)}${Math.round(
        Math.random() * 325434
      )}rem;\n`;
    }
  }
}
GenerateBadSass(5000);

console.log('GENERATE RANDOM SASS');

writeFileSync('src/text.sass', text);

function getRandomString() {
  return Random.String(24).replace(/\d/g, '');
}

function getEmptySpace(max?: number) {
  return ' '.repeat(Math.floor(Math.random() * (max ? max : 24)));
}
