interface Person {
    name: string;
    age: number;
  }
  
  function Adults(people: Person[]): Person[] {
    return people.filter(person => person.age >= 18);
  }

  
  const people: Person[] = [
    { name: "Imran", age: 25 },
    { name: "Sabbir", age: 17 },
    { name: "Darda", age: 16 }
  ];
  
  const adults  = Adults(people);
  console.log(adults);
  