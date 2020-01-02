export enum Literals {
  I = 1,
  V = 5,
  X = 10,
  L = 50,
  C = 100,
  D = 500,
  M = 1000
}

export function inArray(array1: string[], array2: string[]): string[] {
  // your code
  return array1.filter(a1 => array2.find(a2 => a2.match(a1))).sort();
}

export function duplicateEncode(word: string): string {
  return word
    .toLowerCase()
    .split('')
    .map((a, i, w) => {
      return w.indexOf(a) === w.lastIndexOf(a) ? '(' : ')';
    })
    .join('');
}

export function digitalRoot(n: number): number {
  return n
    .toString()
    .split('')
    .reduce((acc, value, index) => {
      acc += +value;
      return acc < 10 ? acc : this.digitalRoot(acc);
    }, 0);
}

export function romanNumeralsDecoder(roman: string): number {
  return roman
    .split('')
    .reduce(
      (acc, literal, index) =>
        acc === 1 ? (acc = Literals[literal] - 1) : (acc += Literals[literal]),
      0
    );
}

export function wave(str: string): Array<string> {
  return str.split('').reduce((localWave, char, index) => {
    if (char === ' ') {
      return localWave;
    }
    localWave.push(str.slice(0, index) + char.toUpperCase() + str.slice(index + 1));
    return localWave;
  }, []);
}

export function busStopPeopleRemaining(busStops: [number, number][]): number {
  // Your Code
  let total = 0;
  busStops.map(pair => {
    total = total + pair[0] - pair[1] > 0 ? total + pair[0] - pair[1] : 0;
  });
  return total;
}
export function spinWords(words: string) {
  return words
    .split(' ')
    .map((w: string) =>
      w.length >= 5
        ? w
            .split('')
            .reverse()
            .join('')
        : w
    )
    .join(' ');
}

export function formatExpressing(intArray: number[]): string {
  const holder = intArray;
  return intArray
    .reduce((result, char, index) => {
      const previous = holder[index - 1] + 1 === char;
      const next = holder[index + 1] === char + 1;

      if (previous) {
        if (next) {
          return result;
        } else {
          if (
            Math.abs(Math.abs(result[result.length - 1]) - Math.abs(char)) === 1
          ) {
            result.push(char);
          } else {
            result[result.length - 1] = `${result[result.length - 1]}-${char}`;
          }
          return result;
        }
      } else {
        result.push(char);
      }
      return result;
    }, [])
    .join(',');
}

//   Given an array, find the int that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.
export function findTheOdd(listOfNumbers: number[]): number {
  // happy coding!
  const joined = listOfNumbers;

  return listOfNumbers.filter(n => {
    return joined.filter(entry => entry === n).length % 2 !== 0;
  })[0];
}

// Write a function that accepts an array of 10 integers (between 0 and 9),
//  that returns a string of those numbers in the form of a phone number.
export function createPhoneNumber(phoneNumbersArray: number[]): string {
  return phoneNumbersArray.reduce((result, char, index) => {
    if (index === 0) {
      result = `(${char}`;
    } else if (index === 2) {
      result = `${result}${char}) `;
    } else if (index === 6) {
      result = `${result}-${char}`;
    } else {
      result = `${result}${char}`;
    }
    return result;
  }, '');
}

// Complete the solution so that it strips all text that follows any of a set of comment markers passed in.
//  Any whitespace at the end of the line should also be stripped out.

export function stripComments(input: string, markers: string[]): string {
  return input.split('\n').reduce((resultingString, item, index) => {
    const startMarker = markers
      .map(marker => item.indexOf(marker))
      .sort((one, two) => (one > two ? -1 : 1))[0];
    const line = startMarker > -1 ? item.slice(0, startMarker) : item;

    return index === 0 ? line : `${resultingString.trim()}\n${line.trim()}`;
  }, '');
}

// Calculate perimetar
export function perimeter(n): number {
  return this.fibonacci(n);
}
export function fibonacci(n): number {
  const result = [1, 1];
  for (let i = 2; i < n + 1; i++) {
    result.push(result[i - 2] + result[i - 1]);
  }
  return (
    result.reduce((acc, value, index) => {
      acc += value;
      return acc;
    }, 0) * 4
  ); // or result[n-1] if you want to get the nth term
}

// Move zeroes to end of an array
export function moveZeros(arrayOfValues: any[]): string[] {
  const zeroesArray = [];
  const withoutZeroesArray = arrayOfValues.reduce(
    (woZeroesArray, value, index) => {
      if (value === 0) {
        zeroesArray.push(value);
        return woZeroesArray;
      }
      woZeroesArray.push(value);
      return woZeroesArray;
    },
    []
  );
  zeroesArray.map(item => {
    withoutZeroesArray.push(item);
    return item;
  });
  return withoutZeroesArray;
}

// Create a simple calculator that given a string of operators (), +, -, *, / and numbers separated
//  by spaces returns the value of that expression
const Calculator = function() {
  this.evaluate = (s: string) =>
    function*() {}
      .constructor('yield ' + s)()
      .next().value;
};

// Function composition is a powerful technique. For example:
// c.sum(4, 5).sum(5).minus(4).sum(7).addOne().double().double().execute();
// Your job is implement the chain function:
function chainFunctions(fns) {
  fns.forEach(fname => {
    const originalFn = fns[fname];
    const fn = (...inputs) => {
      if (this.result != null) {
        inputs.splice(0, 0, this.result);
      }
      const cloneCF = new chainFunctions(fns);
      cloneCF.result = originalFn.apply(this, inputs);
      return cloneCF;
    };
    Object.defineProperty(this, fname, { value: fn });
  });
}
chainFunctions.prototype.execute = function() {
  return this.result;
};

function chain(fns) {
  return new chainFunctions(fns);
}

// Factorial Tails
function zeroes(base, entryNumber) {
  let noz = Number.MAX_VALUE;
  let j = base;
  for (let i = 2; i <= base; i++) {
    if (j % i === 0) {
      let p = 0;
      while (j % i === 0) {
        j = j / i;
        p++;
      }
      let c = 0;
      let z = Math.floor(entryNumber / i);
      while (z > 0) {
        c += z;
        z = Math.floor(z / i);
      }
      noz = Math.min(noz, Math.floor(c / p));
    }
  }
  return noz;
}

export const reducer = (a, n) => {
  if (!(n === 0 && a.length === 0)) {
    a.push(n);
  }
  return a;
};
export const removeZeros = (a: any[]) => {
  return a
    .reduce((b: any, n: any) => this.reducer(b, n), [])
    .reverse()
    .reduce((b: any, n: any) => this.reducer(b, n), [])
    .reverse();
};

// shorter version
export const r = (a, n) => (n === 0 && a.length === 0 ? a : a.concat(n));
export const removeZerosShortVersion = (a: any[]) =>
    a
    .reduce((b, n) => r(b, n), [])
    .reduceRight((b: any, n: any) => r(b, n), [])
    .reverse();
// replace starting and ending zeroes from a string
// .replace(/^0*/, '').replace(/0*$/, '')
// .replace(/(^0+|0+$)/g,a)

export const  removeZerosShortest = (a: any) => (a => a.reverse().filter(x => (a |= x)))(a);
// Multiply large numbers
export function multiply(a, b) {
  return a
    .split('')
    .reduceRight(
      (p: any, a: number, i: any) =>
        b.split('').reduceRight((p, b, j) => {
          const mul = (a - +'0') * (b - +'0');
          const p1 = i + j;
          const p2 = p1 + 1;
          const sum = mul + this.valOrZero(p[p2]);

          p[p1] = this.valOrZero(p[p1]) + Math.floor(sum / 10);
          p[p2] = sum % 10;

          return p;
        }, p),
      []
    )
    .join('')
    .replace(/^0+(?=\d)/, '');
}

export function valOrZero(v) {
  return v || 0;
}

// This is the first part of three (part2, part3).

// Generators and Iterators are ES6 features that allow things like this:
function generator(sequencer) {
  return { next: sequencer.apply(null, [].slice.call(arguments, 1)) };
}
export function isPrime(primerNumber: number) {
  if (primerNumber < 2) {
    return false;
  } else if (primerNumber === 2) {
    return true;
  }

  for (let i = 2; i < primerNumber; i++) {
    if (primerNumber % i === 0) {
      return false;
    }
  }

  return true;
}
export function* getNextPrime() {
  let nextNumber = 2;
  while (true) {
    if (isPrime(nextNumber)) {
      yield nextNumber;
    }
    nextNumber++;
  }
}

export function* factorialSeq() {
  let n = 0 ;
  let total = 1;
  while (true) {
    total = n === 0 ? total : (total *= n);
    n++;
    yield total;
  }
}

export function* fibonacciSeq() {
  let previous = 0 ;
  let  current = 1 ;
  let  next = 1 ;
  while (true) {
    previous = current;
    current = next;
    next = previous + current;
    yield previous;
  }
}

export function* rangeSeq(start, step) {
  let result = start;
  while (true) {
    result += step;
    yield result;
  }
}

const sieve = [2, 3, 5, 7, 11];

export function* primeSeq() {
  let count = 0;
  while (true) {
    if (sieve[count] == null) { generateNextPrime(); }
    return sieve[count++];
  }
}

function generateNextPrime() {
  let current = sieve[sieve.length - 1] + 2;
  while (true) {
    if (isPrimeFromSieve(current)) {
      sieve.push(current);
      break;
    }
    current += 2;
  }
}

function isPrimeFromSieve(num) {
  const max = Math.ceil(Math.sqrt(num));
  for (const element of  sieve ) {
    if (num % element === 0) { return false; } else if (max < element) { return true; }
  }
  return true;
}

export function* partialSumSeq() {
  const sumSeq = Array.prototype.slice.call(arguments);
  let total = 0;
  let index = 0;

  while (true) {
    if (sumSeq.length === index) { throw Error('End of sequence'); }
    const res = (total += sumSeq[index++]);
    yield res;
  }
}

// //Check Range
// export const checkRange=(a,x,y,c=0)=>a.map(v=>c+=v<x==v>y)|c

// Capitalize first letter
// <-- Start Capitalize first letter-->
export const capitalLetter = w =>
  w.charAt(0).toUpperCase() + w.substring(1).toLowerCase();

export const titleCase = (title, minorWords = '') => {
  return title
    .split(' ')
    .map((w, i) =>
      i === 0
        ? capitalLetter(w)
        : minorWords
            .toLowerCase()
            .split(' ')
            .includes(w.toLowerCase())
        ? w.toLowerCase()
        : capitalLetter(w)
    )
    .join(' ');
};

// <-- End Capitalize first letter-->

export function firstNonRepeatingLetter(s) {
  s.split('').filter(char => s.indexOf(char) === s.lastIndexOf(char));
  const a = s.split('');
  a.findIndex();
}
export function _titleCase(title: string, minorWords: string) {
  const res = title.split(' ').map(word => {
    if (minorWords !== '') {
      if (minorWords.split(' ').indexOf(word) > -1) {
        return word.toLowerCase();
      }
    } else {
      word = word.charAt(0).toUpperCase() + word.substring(1);
      return word;
    }
  });
}

/// with(Math)circleIntersection=([a,b],[c,d],r)=>(-sin(x=2*acos(hypot(a-c,b-d)/2/r))+x)*r**2|0

const dictionary = {
  RR: 'R',
  GG: 'G',
  BB: 'B',
  RG: 'B',
  RB: 'G',
  GR: 'B',
  GB: 'R',
  BR: 'G',
  BG: 'R'
};
function triangle(entry) {
  while (entry.length > 1) {
    let n = '' ;
    let  c = 1 ;
    while (entry.length % (3 * c) === 1) { c *= 3; }
    for (let i = 0; i < entry.length - 1; i += c) {
      n += dictionary[entry[i] + entry[i + c]];
    }
    entry = n;
  }
  return entry;
}

// removeZeros=a=>eval(`[${/[^0,].*[^0,]/.exec(a)}]`)

// squirrel=(h,H,S)=>+Math.hypot(H,H*S/h).toFixed(4)

//   const map = {'RR': 'R', 'BB': 'B', 'GG': 'G', 'RB': 'G', 'BR': 'G', 'BG': 'R', 'GB': 'R', 'RG': 'B', 'GR': 'B'};
// function triangle(row) {
//   function step(r, i, l) {
//     if (r==1) return row[i];
//     var d = 3**l
//     while (r <= d) d = 3**--l;
//     return map[step(r-d,i, l)+step(r-d,i+d, l)];
//   }
//   return step(row.length, 0, ~~(Math.log(row.length-1) / Math.log(3)));
// }
