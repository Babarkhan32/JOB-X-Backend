import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class User extends Entity {
  @property({
    type: 'string',
    required: true,
  })
  username: string;

  @property({
    type: 'string',
    required: true,
  })
  password: string;


  @property({
    type: 'array',
    required: true,
  })
  categories: [];

  @property({
    type: 'string',

  })
  role: string;

  @property({
    type: 'string',

  })
  CNIC: string;

  @property({
    type: 'object',

  })
  media: Object;

  @property({
    type: 'number',
    required: true,
  })
  buyerFulfilmentRate: number;

  @property({
    type: 'number',
    required: true,
  })
  sellerFulfilmentRate: number;


  @property({
    type: 'boolean',
    required: true,
  })
  isAgreementSigned: boolean;


  @property({
    type: 'any',
    id: true,
    generated: true,
  })
  _id?: any;
  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<User>) {
    super(data);
  }
}

export interface UserRelations {
  // describe navigational properties here
}

export type UserWithRelations = User & UserRelations;
