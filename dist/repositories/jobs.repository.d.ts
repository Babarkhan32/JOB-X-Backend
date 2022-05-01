import { DefaultCrudRepository } from '@loopback/repository';
import { DbDataSource } from '../datasources';
import { Jobs, JobsRelations } from '../models';
export declare class JobsRepository extends DefaultCrudRepository<Jobs, typeof Jobs.prototype._id, JobsRelations> {
    constructor(dataSource: DbDataSource);
}
