"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JobsController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let JobsController = class JobsController {
    constructor(jobsRepository) {
        this.jobsRepository = jobsRepository;
    }
    async create(jobs) {
        return this.jobsRepository.create(jobs);
    }
    async count(where) {
        return this.jobsRepository.count(where);
    }
    async find(filter) {
        return this.jobsRepository.find(filter);
    }
    async updateAll(jobs, where) {
        return this.jobsRepository.updateAll(jobs, where);
    }
    async findById(id, filter) {
        return this.jobsRepository.findById(id, filter);
    }
    async updateById(id, jobs) {
        await this.jobsRepository.updateById(id, jobs);
    }
    async replaceById(id, jobs) {
        await this.jobsRepository.replaceById(id, jobs);
    }
    async deleteById(id) {
        await this.jobsRepository.deleteById(id);
    }
};
tslib_1.__decorate([
    (0, rest_1.post)('/jobs'),
    (0, rest_1.response)(200, {
        description: 'Jobs model instance',
        content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Jobs) } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Jobs, {
                    title: 'NewJobs',
                    exclude: ['id'],
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], JobsController.prototype, "create", null);
tslib_1.__decorate([
    (0, rest_1.get)('/jobs/count'),
    (0, rest_1.response)(200, {
        description: 'Jobs model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.Jobs)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], JobsController.prototype, "count", null);
tslib_1.__decorate([
    (0, rest_1.get)('/jobs'),
    (0, rest_1.response)(200, {
        description: 'Array of Jobs model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: (0, rest_1.getModelSchemaRef)(models_1.Jobs, { includeRelations: true }),
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.Jobs)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], JobsController.prototype, "find", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/jobs'),
    (0, rest_1.response)(200, {
        description: 'Jobs PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Jobs, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.Jobs)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.Jobs, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], JobsController.prototype, "updateAll", null);
tslib_1.__decorate([
    (0, rest_1.get)('/jobs/{id}'),
    (0, rest_1.response)(200, {
        description: 'Jobs model instance',
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Jobs, { includeRelations: true }),
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.Jobs, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], JobsController.prototype, "findById", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/jobs/{id}'),
    (0, rest_1.response)(204, {
        description: 'Jobs PATCH success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Jobs, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.Jobs]),
    tslib_1.__metadata("design:returntype", Promise)
], JobsController.prototype, "updateById", null);
tslib_1.__decorate([
    (0, rest_1.put)('/jobs/{id}'),
    (0, rest_1.response)(204, {
        description: 'Jobs PUT success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.Jobs]),
    tslib_1.__metadata("design:returntype", Promise)
], JobsController.prototype, "replaceById", null);
tslib_1.__decorate([
    (0, rest_1.del)('/jobs/{id}'),
    (0, rest_1.response)(204, {
        description: 'Jobs DELETE success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], JobsController.prototype, "deleteById", null);
JobsController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.JobsRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.JobsRepository])
], JobsController);
exports.JobsController = JobsController;
//# sourceMappingURL=jobs.controller.js.map