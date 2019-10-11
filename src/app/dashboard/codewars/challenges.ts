
  export function inArray(array1: string[], array2: string[]): string[] {
    // your code
    return array1
    .filter(a1 => array2.find(a2 => a2.match(a1)))
    .sort()
  }

  export function  duplicateEncode(word: string): string{
    return word
    .toLowerCase()
    .split('')
    .map((a, i, w) => {
      return w.indexOf(a) == w.lastIndexOf(a) ? '(' : ')'
    })
    .join('')
  }

  export function  digitalRoot(n:number): number {
   return n.toString().split("").reduce( (acc , value , index) => {
      acc += +value;
      return acc < 10 ? acc : this.digitalRoot(acc) ;
    }, 0)
  };
  
  export function  romanNumeralsDecoder(roman: string): number {
    return roman.split("").reduce( (acc , literal , index )  =>
      acc === 1 ?  acc = Literals[literal] - 1  :   acc += Literals[literal] , 0)
  }

  export function  wave(str: string): Array<string>{
    return str.split("").reduce( (wave , char ,index) => {
      if (char === " "){
        return wave ;
      } 
      wave.push( str.slice( 0 ,index) + char.toUpperCase() + str.slice((index + 1))
      )
       return wave;
   } , [] )
  }
  
  export function  busStopPeopleRemaining(busStops: [number, number][]): number {
    // Your Code
    let total = 0;
    busStops.map( (pair ) => {
      total = (total + pair[0]) - pair[1] > 0 ? (total + pair[0]) - pair[1]  : 0;
      });
    return total;
  }
  export function spinWords(words: string) {
    return words.split(' ')
    .map( (w: string) => w.length >= 5 ? w.split("").reverse().join("") : w)
    .join(' ');
  }