import { TokenService } from '@loopback/authentication';
import { MyUserService } from '@loopback/authentication-jwt';
import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { RequestContext, SchemaObject } from '@loopback/rest';
import { User } from '../models';
import { UserRepository } from '../repositories';
export declare const CredentialsRequestBody: {
    description: string;
    required: boolean;
    content: {
        'application/json': {
            schema: SchemaObject;
        };
    };
};
export declare class UserController {
    private requestCtx;
    jwtService: TokenService;
    userService: MyUserService;
    userRepository: UserRepository;
    constructor(requestCtx: RequestContext, jwtService: TokenService, userService: MyUserService, userRepository: UserRepository);
    create(user: Omit<User, '_id'>): Promise<User>;
    count(where?: Where<User>): Promise<Count>;
    login(credentials: any): Promise<any>;
    find(filter?: Filter<User>): Promise<User[]>;
    updateAll(user: User, where?: Where<User>): Promise<Count>;
    findById(id: string, filter?: FilterExcludingWhere<User>): Promise<User>;
    updateById(id: string, user: User): Promise<void>;
    replaceById(id: string, user: User): Promise<void>;
    deleteById(id: string): Promise<void>;
}
