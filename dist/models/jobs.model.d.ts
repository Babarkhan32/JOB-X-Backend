import { Entity } from '@loopback/repository';
export declare class Jobs extends Entity {
    _id: string;
    jobasignee?: object;
    jobmedia?: object;
    jobposter: object;
    title: string;
    description: string;
    deadline: string;
    status: string;
    tags?: string[];
    jobapplicants?: string[];
    [prop: string]: any;
    constructor(data?: Partial<Jobs>);
}
export interface JobsRelations {
}
export declare type JobsWithRelations = Jobs & JobsRelations;
