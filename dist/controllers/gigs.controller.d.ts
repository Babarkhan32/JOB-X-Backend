import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { Gigs } from '../models';
import { GigsRepository } from '../repositories';
export declare class GigsController {
    gigsRepository: GigsRepository;
    constructor(gigsRepository: GigsRepository);
    create(gigs: Omit<Gigs, 'id'>): Promise<Gigs>;
    count(where?: Where<Gigs>): Promise<Count>;
    find(filter?: Filter<Gigs>): Promise<Gigs[]>;
    updateAll(gigs: Gigs, where?: Where<Gigs>): Promise<Count>;
    findById(id: string, filter?: FilterExcludingWhere<Gigs>): Promise<Gigs>;
    updateById(id: string, gigs: Gigs): Promise<void>;
    replaceById(id: string, gigs: Gigs): Promise<void>;
    deleteById(id: string): Promise<void>;
}
