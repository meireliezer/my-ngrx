export interface IUser {
    first: string;
    last: string;
    aga:  number;
}

export class User implements IUser {
    first: string;
    last: string;
    aga: number;

    constructor(first:string, last:string, age: number){
        this.first = first;
        this.last = last;
        this.aga = age;
    }
}