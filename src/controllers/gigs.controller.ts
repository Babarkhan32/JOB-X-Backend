import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
} from '@loopback/rest';
import {Gigs} from '../models';
import {GigsRepository} from '../repositories';

export class GigsController {
  constructor(
    @repository(GigsRepository)
    public gigsRepository : GigsRepository,
  ) {}

  @post('/gigs')
  @response(200, {
    description: 'Gigs model instance',
    content: {'application/json': {schema: getModelSchemaRef(Gigs)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Gigs, {
            title: 'NewGigs',
            exclude: ['id'],
          }),
        },
      },
    })
    gigs: Omit<Gigs, 'id'>,
  ): Promise<Gigs> {
    return this.gigsRepository.create(gigs);
  }

  @get('/gigs/count')
  @response(200, {
    description: 'Gigs model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Gigs) where?: Where<Gigs>,
  ): Promise<Count> {
    return this.gigsRepository.count(where);
  }

  @get('/gigs')
  @response(200, {
    description: 'Array of Gigs model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Gigs, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Gigs) filter?: Filter<Gigs>,
  ): Promise<Gigs[]> {
    return this.gigsRepository.find(filter);
  }

  @patch('/gigs')
  @response(200, {
    description: 'Gigs PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Gigs, {partial: true}),
        },
      },
    })
    gigs: Gigs,
    @param.where(Gigs) where?: Where<Gigs>,
  ): Promise<Count> {
    return this.gigsRepository.updateAll(gigs, where);
  }

  @get('/gigs/{id}')
  @response(200, {
    description: 'Gigs model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Gigs, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(Gigs, {exclude: 'where'}) filter?: FilterExcludingWhere<Gigs>
  ): Promise<Gigs> {
    return this.gigsRepository.findById(id, filter);
  }

  @patch('/gigs/{id}')
  @response(204, {
    description: 'Gigs PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Gigs, {partial: true}),
        },
      },
    })
    gigs: Gigs,
  ): Promise<void> {
    await this.gigsRepository.updateById(id, gigs);
  }

  @put('/gigs/{id}')
  @response(204, {
    description: 'Gigs PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() gigs: Gigs,
  ): Promise<void> {
    await this.gigsRepository.replaceById(id, gigs);
  }

  @del('/gigs/{id}')
  @response(204, {
    description: 'Gigs DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.gigsRepository.deleteById(id);
  }
}
