import { Component, OnInit } from '@angular/core';
import {UsersService} from "./shared/users.service";
import {User} from "./shared/user";
import {TesterService} from "../tester.service";
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  styles: [`
    table td {
     font-weight:bold;
     color:orange;
     font-size:18px;
     font-family:italic;
    }
  `],
   animations: [
    trigger('users', [
      state('inactive', style({
        backgroundColor: '#eee',
        transform: 'scale(1)'
      })),
      state('active',   style({
        backgroundColor: '#cfd8dc',
        transform: 'scale(1.1)'
      })),
      transition('inactive => active', animate('100ms ease-in')),
      transition('active => inactive', animate('100ms ease-out'))
    ])
  ],
  providers:[TesterService],
})
export class UsersComponent implements OnInit {
newHero :string;
   heroes = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado'];
  addHero(newHero: string) {
    if (newHero) {
      this.heroes.push(newHero);
    }
}

value = '';
onEnter(value: string) { this.value = value; }
clickMessage = '';
onClickMe() {
this.clickMessage = 'success for the click ';
}

private users: User[] = [];
constructor(private usersService: UsersService) { }
ngOnInit() {
this.usersService.getUsers()
.subscribe(data1 => this.users = data1);
}

deleteUser(user){
if (confirm("Are you sure you want to delete " + user.name + "?")) {
var index = this.users.indexOf(user);
this.users.splice(index, 1);

this.usersService.deleteUser(user.id)
.subscribe(null,
err => {
alert("Could not delete user.");
// Revert the view back to its original state
this.users.splice(index, 0, user);
});
}
}

}
