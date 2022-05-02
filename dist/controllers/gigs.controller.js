"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GigsController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let GigsController = class GigsController {
    constructor(gigsRepository) {
        this.gigsRepository = gigsRepository;
    }
    async create(gigs) {
        return this.gigsRepository.create(gigs);
    }
    async count(where) {
        return this.gigsRepository.count(where);
    }
    async find(filter) {
        return this.gigsRepository.find(filter);
    }
    async updateAll(gigs, where) {
        return this.gigsRepository.updateAll(gigs, where);
    }
    async findById(id, filter) {
        return this.gigsRepository.findById(id, filter);
    }
    async updateById(id, gigs) {
        await this.gigsRepository.updateById(id, gigs);
    }
    async replaceById(id, gigs) {
        await this.gigsRepository.replaceById(id, gigs);
    }
    async deleteById(id) {
        await this.gigsRepository.deleteById(id);
    }
};
tslib_1.__decorate([
    (0, rest_1.post)('/gigs'),
    (0, rest_1.response)(200, {
        description: 'Gigs model instance',
        content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Gigs) } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Gigs, {
                    title: 'NewGigs',
                    exclude: ['id'],
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], GigsController.prototype, "create", null);
tslib_1.__decorate([
    (0, rest_1.get)('/gigs/count'),
    (0, rest_1.response)(200, {
        description: 'Gigs model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.Gigs)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], GigsController.prototype, "count", null);
tslib_1.__decorate([
    (0, rest_1.get)('/gigs'),
    (0, rest_1.response)(200, {
        description: 'Array of Gigs model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: (0, rest_1.getModelSchemaRef)(models_1.Gigs, { includeRelations: true }),
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.Gigs)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], GigsController.prototype, "find", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/gigs'),
    (0, rest_1.response)(200, {
        description: 'Gigs PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Gigs, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.Gigs)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.Gigs, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], GigsController.prototype, "updateAll", null);
tslib_1.__decorate([
    (0, rest_1.get)('/gigs/{id}'),
    (0, rest_1.response)(200, {
        description: 'Gigs model instance',
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Gigs, { includeRelations: true }),
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.Gigs, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], GigsController.prototype, "findById", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/gigs/{id}'),
    (0, rest_1.response)(204, {
        description: 'Gigs PATCH success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Gigs, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.Gigs]),
    tslib_1.__metadata("design:returntype", Promise)
], GigsController.prototype, "updateById", null);
tslib_1.__decorate([
    (0, rest_1.put)('/gigs/{id}'),
    (0, rest_1.response)(204, {
        description: 'Gigs PUT success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.Gigs]),
    tslib_1.__metadata("design:returntype", Promise)
], GigsController.prototype, "replaceById", null);
tslib_1.__decorate([
    (0, rest_1.del)('/gigs/{id}'),
    (0, rest_1.response)(204, {
        description: 'Gigs DELETE success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], GigsController.prototype, "deleteById", null);
GigsController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.GigsRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.GigsRepository])
], GigsController);
exports.GigsController = GigsController;
//# sourceMappingURL=gigs.controller.js.map