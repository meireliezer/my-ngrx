export interface IUser {
    id?: number
    first: string;
    last: string;
    aga:  number;
}

export class User implements IUser {
    first: string;
    last: string;
    aga: number;
    id: number;

    constructor(first:string, last:string, age: number, id?: number){
        this.first = first;
        this.last = last;
        this.aga = age;
        this.id = id;
    }
}