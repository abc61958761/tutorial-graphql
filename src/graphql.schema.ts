
/** ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export class CatInput {
    name: string;
    age: number;
    color: string;
}

export abstract class IQuery {
    abstract getCats(): Cat[] | Promise<Cat[]>;
}

export abstract class IMutation {
    abstract createCat(catInput?: CatInput): Cat | Promise<Cat>;
}

export class Cat {
    id?: number;
    name?: string;
    age?: number;
    color?: string;
}
