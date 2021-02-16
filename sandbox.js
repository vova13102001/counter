function sayHi(hiStr = 'Hi', name) {
  if(!name){
    throw new Error();
  }
  return `${hiStr} ${name}`;
}

sayHi('Bye', 'Dmytro');
sayHi('Bye', 'Vova');
sayHi('Promotion', 'Vova');
