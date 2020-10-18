import { User } from '../model/user.model';
import { Injectable } from '@angular/core';


@Injectable({providedIn:'root'})
export class UserService {

    public users: User[] = [];

    constructor() {
        this.users.push( new User('Meir', 'Eliezer', 47, this.users.length + 1));
        this.users.push( new User('Miri', 'Bahari', 49, this.users.length + 1));
        this.users.push( new User('Rachel', 'Marcus', 45, this.users.length + 1));
        this.users.push( new User('Dayia', 'Eliezer', 80, this.users.length + 1));
       }


       public getUsers(){
           return this.users;
       }

}