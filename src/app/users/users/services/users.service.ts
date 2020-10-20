import { User } from '../model/user.model';
import { Injectable } from '@angular/core';


@Injectable({providedIn:'root'})
export class UserService {

    public users: User[] = [];
    public userId = 0;

    constructor() {
        this.users.push( new User('Meir', 'Eliezer', 47, ++this.userId));
        this.users.push( new User('Miri', 'Bahari', 49, ++this.userId));
        this.users.push( new User('Rachel', 'Marcus', 45, ++this.userId));
        this.users.push( new User('Dayia', 'Eliezer', 80, ++this.userId));
       }


       public getUsers(){
           return this.users;
       }

}