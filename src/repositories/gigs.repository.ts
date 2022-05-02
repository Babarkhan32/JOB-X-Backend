import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {Gigs, GigsRelations} from '../models';

export class GigsRepository extends DefaultCrudRepository<
  Gigs,
  typeof Gigs.prototype._id,
  GigsRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(Gigs, dataSource);
  }
}
