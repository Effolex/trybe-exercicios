"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.unitConversion = void 0;
const readLineSync = require('readline-sync');
const metrics = ['km', 'hm', 'dam', 'm', 'dm', 'cm', 'mm'];
function unitConversion(value, base, conversion) {
    const indexOfMetric = metrics.indexOf(base);
    const indexOfConversion = metrics.indexOf(conversion);
    const difference = indexOfConversion - indexOfMetric;
    return value * (10 ** difference);
}
exports.unitConversion = unitConversion;
console.log(unitConversion(1, 'm', 'km'));
const characters = [
    {
        nickname: 'xKillerx',
        class: 'warrior',
        stats: { agi: 50, str: 100, int: 25, hp: 1000, mp: 300 },
        createdAt: new Date('2003-10-1')
    },
    {
        nickname: 'jainaProud',
        class: 'mage',
        stats: { agi: 80, str: 40, int: 150, hp: 630, mp: 1100 },
        createdAt: new Date('2003-10-2')
    },
    {
        nickname: 'catIn',
        class: 'hunter',
        stats: { agi: 150, str: 90, int: 80, hp: 800, mp: 600 },
        createdAt: new Date('2003-10-15')
    },
];
function printCharacter(character, index) {
    const { nickname, class: cls, createdAt } = character;
    console.log(`\n\n===== Character: ${index + 1} ========`);
    console.log(`nickname: ${nickname}
class: ${cls}
createdAt: ${createdAt}`);
}
characters.forEach(printCharacter);
function getConversion() {
    readLineSync.setDefaultOptions({ limit: metrics });
    const value = readLineSync.question('What is the value', { limit: null });
    const metric = readLineSync.question('What is the metric');
    const conversion = readLineSync.question('What is the conversion');
    console.log(unitConversion(+value, metric, conversion));
}
getConversion();
