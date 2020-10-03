import { Injectable } from '@nestjs/common';
import { Cat } from './interfaces/cat.interfarce';

@Injectable()
export class CatsService {
    private readonly cats: Cat[] = [];

    async create(cat: Cat) {
        this.cats.push(cat);
    }

    findAll(): Cat[] {
        return this.cats;
    }
}
