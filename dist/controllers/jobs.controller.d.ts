import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { Jobs } from '../models';
import { JobsRepository } from '../repositories';
export declare class JobsController {
    jobsRepository: JobsRepository;
    constructor(jobsRepository: JobsRepository);
    create(jobs: Omit<Jobs, 'id'>): Promise<Jobs>;
    count(where?: Where<Jobs>): Promise<Count>;
    find(filter?: Filter<Jobs>): Promise<Jobs[]>;
    updateAll(jobs: Jobs, where?: Where<Jobs>): Promise<Count>;
    findById(id: string, filter?: FilterExcludingWhere<Jobs>): Promise<Jobs>;
    updateById(id: string, jobs: Jobs): Promise<void>;
    replaceById(id: string, jobs: Jobs): Promise<void>;
    deleteById(id: string): Promise<void>;
}
