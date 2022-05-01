import { DefaultCrudRepository } from '@loopback/repository';
import { DbDataSource } from '../datasources';
import { User, UserRelations } from '../models';
export declare class UserRepository extends DefaultCrudRepository<User, typeof User.prototype._id, UserRelations> {
    constructor(dataSource: DbDataSource);
}
