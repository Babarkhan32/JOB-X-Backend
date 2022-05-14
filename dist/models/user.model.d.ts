import { Entity } from '@loopback/repository';
export declare class User extends Entity {
    username: string;
    password: string;
    categories: string[];
    role: string;
    CNIC: string;
    media: Object;
    buyerFulfilmentRate: number;
    sellerFulfilmentRate: number;
    isAgreementSigned: boolean;
    _id?: any;
    [prop: string]: any;
    constructor(data?: Partial<User>);
}
export interface UserRelations {
}
export declare type UserWithRelations = User & UserRelations;
