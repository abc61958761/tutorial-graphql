import { Injectable } from '@nestjs/common';
import { Cat, CatInput } from '../graphql.schema'

@Injectable()
export class CatsService {
    private cats: Cat[] = [];

    create(cat: CatInput) {
        const newCat = {
            id: this.cats.length + 1,
            ...cat
        }
        this.cats.push(newCat);
        return newCat;
    }

    findAll(): Cat[] {
        return this.cats;
    }
}
