import { DefaultCrudRepository } from '@loopback/repository';
import { DbDataSource } from '../datasources';
import { Gigs, GigsRelations } from '../models';
export declare class GigsRepository extends DefaultCrudRepository<Gigs, typeof Gigs.prototype._id, GigsRelations> {
    constructor(dataSource: DbDataSource);
}
