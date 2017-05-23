import { Component, OnInit } from '@angular/core';
import {TesterService} from '../tester.service';
@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
  providers:[TesterService]
})
export class BlogComponent implements OnInit {


  ngOnInit() {
        // alert(this.myService.getSomethingtwo())  ;
   
  }

constructor(private myService:TesterService) {} // note the private keyword
 
 doStuff()
  {
        return this.myService.getSomething();
    }
}
