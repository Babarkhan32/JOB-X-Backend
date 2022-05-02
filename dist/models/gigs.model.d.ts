import { Entity } from '@loopback/repository';
export declare class Gigs extends Entity {
    _id?: string;
    title: string;
    description: string;
    price: string;
    tags: string[];
    media?: object;
    user: Object;
    [prop: string]: any;
    constructor(data?: Partial<Gigs>);
}
export interface GigsRelations {
}
export declare type GigsWithRelations = Gigs & GigsRelations;
