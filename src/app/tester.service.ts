import { Injectable } from '@angular/core';

@Injectable()
export class TesterService {

  constructor() { }

getSomething =function(){

alert("hello to all of you for the greater conversion");
console.log("hello this is working now.");
}


getSomethingtwo =function(){

alert("This is tge text for the testing of application purpose only.");
}

getdatafromtesterservice(){

alert("success for the call to be injected in the service.");

}
}
