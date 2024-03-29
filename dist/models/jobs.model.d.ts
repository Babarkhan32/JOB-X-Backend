import { Entity } from '@loopback/repository';
export declare class Jobs extends Entity {
    _id: string;
    jobasignee?: object;
    jobmedia?: object;
    jobposter: object;
    budget: number;
    title: string;
    description: string;
    deadline: string;
    status: string;
    jobType: string;
    jobCategory: string;
    tags?: string[];
    jobapplicants?: string[];
    [prop: string]: any;
    constructor(data?: Partial<Jobs>);
}
export interface JobsRelations {
}
export declare type JobsWithRelations = Jobs & JobsRelations;
