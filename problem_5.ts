function stringOrError(param: unknown): void {
    if (typeof param === 'string') {
      console.log(param);
    } else {
      console.error('not string');
    }
  }

  stringOrError('Developer');  
stringOrError(123);  