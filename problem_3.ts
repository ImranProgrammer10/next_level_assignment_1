function reverseArray<T>(...items: T[]): T[] {
    return items.reverse();
  }
  
   
  const reversedArray = reverseArray('Imran', 'Saad', 'Tarek');
  console.log(reversedArray);  