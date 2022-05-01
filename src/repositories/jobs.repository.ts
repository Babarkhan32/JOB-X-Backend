import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {Jobs, JobsRelations} from '../models';

export class JobsRepository extends DefaultCrudRepository<
  Jobs,
  typeof Jobs.prototype._id,
  JobsRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(Jobs, dataSource);
  }
}
