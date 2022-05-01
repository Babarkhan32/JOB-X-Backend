import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Jobs extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: false,
  })
  _id: string;

  @property({
    type: 'object',
  })
  jobasignee?: object;

  @property({
    type: 'object',
  })
  jobmedia?: object;

  @property({
    type: 'object',
    required: true,
  })
  jobposter: object;

  @property({
    type: 'string',
    required: true,
  })
  title: string;

  @property({
    type: 'string',
    required: true,
  })
  description: string;

  @property({
    type: 'date',
    required: true,
  })
  deadline: string;

  @property({
    type: 'string',
    required: true,
  })
  status: string;

  @property({
    type: 'array',
    itemType: 'string',
  })
  tags?: string[];

  @property({
    type: 'array',
    itemType: 'string',
  })
  jobapplicants?: string[];
  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Jobs>) {
    super(data);
  }
}

export interface JobsRelations {
  // describe navigational properties here
}

export type JobsWithRelations = Jobs & JobsRelations;
