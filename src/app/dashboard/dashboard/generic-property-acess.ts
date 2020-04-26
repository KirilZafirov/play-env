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