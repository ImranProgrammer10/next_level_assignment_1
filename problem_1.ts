function repeatedString(str: string, num: number = 3): void {
    for (let i = 0; i < num; i++) {
      console.log(str);
    }
  }
  
  
  repeatedString("Developer", 5);  
  repeatedString("Engineer");  