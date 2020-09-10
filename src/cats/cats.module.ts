import { Module } from '@nestjs/common';
import { CatsService } from './cats.service';
import { CatResolver } from './cats.resolver';

@Module({
    providers: [CatsService, CatResolver],
})
export class CatsModule {}
