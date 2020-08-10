
interface MyPerson {
    name: string, 
    age: number,
    address: string
}

const person = {
      name: 'itay', 
      age: 28
    } 

  type Person = typeof person;

  type PersonKeys = keyof Person;
  //type AccordionItemsKeys = "header" | "content"
 
  type PersonTypes = Person[PersonKeys];

  let personTypes:PersonTypes;
      //type AccordionItemTypes = "string";

    
    // K = "name" | "age"
    function getProp<T , K extends keyof T>(obj: T , key: K) {
      return obj[key];    
    }

    //const accordionItem: any;
    const accordionItem = getProp(person, 'age');


    //Mapped Types 

    function updateBad(person: Person , prop: { [key: string]: any}) {
        return { ...person, ...prop};
    }

    updateBad( person , {name: 'ABC'});

    // undetected error
    updateBad( person , {namezzzz: 'ABC'});


  function update(person: Person , prop: Partial<Person>) {
    return { ...person, ...prop};
  }

  
    update( person , { name: 'ABC' });

    // undetected error now being detected because of the partial spread ....
    // update( person , {namezzzz: 'ABC'});



    // type Partial<T> = {
    //     [P in keyof T]?: T[P]
    // }


    // type Readonly<T> = {
    //     readonly [P in keyof T]: T[P]
    // }

    function freeze<T>(obj: T) {
        //freeze<T>(o: T): Readonly<T>;
        return Object.freeze(obj);
    }

    const newPerson = freeze(person);
   
    type Stringify<T> = {
        [P in keyof T]: string;
    }

    // type Nullable<T> = {
    //     [P in keyof T]: string;
    // }
    
    // type Record<K extends string, T> = {
    //     [P in K]: T;
    // }


    // type Pick<T , K extends keyof T> = {
    //     [P in K] : T[P];
    // }


    const myPerson: Pick<Person, 'name' | 'age'> = {
        name: 'Todd',
        age: 28
    } 




    //Discriminated Unions

    const enum Entity {
      Individual , Corporation
    }

    interface Individual {
      type: Entity.Individual,
      ssn: string;
    }

    interface Corporation {
      type: Entity.Corporation,
      ein: string;
    }


    type TaxPayer = Individual | Corporation ;

    const payer : TaxPayer = {
      type: Entity.Individual,
      ssn: 'hgfdhgfd'
    }

    function getPayerType(payer:TaxPayer){
      if(payer.type === Entity.Individual) {
        console.log( payer.ssn);
        // console.log( payer.ein);
       } else {
        //  console.log( payer.ssn);
         console.log( payer.ein);
       }
    }
  
    interface IRectangle {
      type: 'Rectangle'
      width: number
      height: number
    }
    interface ICircle {
        type: 'Circle'
        radius: number
    }

    interface ITriangle {
      type: 'Triangle'
      side: number
  }

    type Shape = IRectangle | ICircle | ITriangle
    
    function area(shape: Shape): number {
      switch (shape.type) {
          case 'Rectangle':
              return shape.width * shape.height
          case 'Circle':
              return Math.PI * Math.pow(shape.radius, 2)
          default:
              const msg: ITriangle = shape
              throw new TypeError(`Unknown type: ${msg}`)
      }
  }


  let tupple: [ string , number ]; 
  tupple = [ 'asd',5];
 
 
  interface ITuple
  {
   0: boolean,
   1: number
  };
  
  let y: ITuple;
  y = [false, 0, 3, 3, true];


  type IDictionary = [string, number];

  let myDictionary: IDictionary[];

  myDictionary['key1'] = 5;