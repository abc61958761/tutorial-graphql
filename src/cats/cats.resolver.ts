import { Resolver, Query, Mutation, Args } from "@nestjs/graphql";
import { CatsService } from './cats.service';
import { Cat, CatInput } from '../graphql.schema';

@Resolver('Cat')
export class CatResolver {
    constructor(
        private readonly catsService: CatsService
    ) {}

    @Query('getCats')
    getCat(): Cat[] {
        return this.catsService.findAll();
    }

    @Mutation('createCat') 
    async createCat(@Args('catInput') args: CatInput): Promise<Cat> {
        return this.catsService.create(args);
    }

}