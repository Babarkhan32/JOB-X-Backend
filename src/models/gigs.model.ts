import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Gigs extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  _id?: string;

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
    type: 'string',
    required: true,
  })
  price: string;

  @property({
    type: 'array',
    itemType: 'string',
    required: true,
  })
  tags: string[];

  @property({
    type: 'object',
  })
  media?: object;

  @property({
    type: 'object',
    required: true,
  })
  user: Object;


  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Gigs>) {
    super(data);
  }
}

export interface GigsRelations {
  // describe navigational properties here
}

export type GigsWithRelations = Gigs & GigsRelations;
