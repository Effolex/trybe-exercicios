const readLineSync = require('readline-sync');

const metrics:Array<String> = ['km','hm','dam','m','dm','cm','mm'];

export function unitConversion
(value: number, base: string, conversion: string)
: number {
  const indexOfMetric: number = metrics.indexOf(base);
  const indexOfConversion: number = metrics.indexOf(conversion);
  const difference: number = indexOfConversion - indexOfMetric;
  
  return value * (10 ** difference);
}

console.log(unitConversion(1, 'm', 'km'));

type character = {
  nickname: string,
  class: string,
  stats: {
    agi: number,
    str: number,
    int: number,
    hp: number,
    mp: number,
  },
  createdAt: Date,
};

const characters: character[] = [
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
]

function printCharacter(character: any, index: number) {
  const { nickname, class: cls, createdAt } = character;
  console.log(`\n\n===== Character: ${index + 1} ========`);
  console.log(`nickname: ${nickname}
class: ${cls}
createdAt: ${createdAt}`);
}

characters.forEach(printCharacter);

function getConversion():void {

  readLineSync.setDefaultOptions({ limit: metrics });
  const value = readLineSync.question('What is the value', {limit: null})
  const metric = readLineSync.question('What is the metric')
  const conversion = readLineSync.question('What is the conversion')
  console.log(unitConversion(+value, metric, conversion));
}

getConversion();

