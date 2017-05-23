import { Component, OnInit } from '@angular/core';
import { VERSION } from '@angular/core';

@Component({
selector: 'app-about',
templateUrl: './about.component.html',
styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

constructor() { 

}

ngOnInit() {
console.log("The curent version of angular is  :"+VERSION.full);
}

}
