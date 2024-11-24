import { IMunicipeRepository } from '../../domain/repositories/IMunicipeRepository'
import { MunicipeEntity } from '../../domain/entities/MunicipeEntity'
import Municipe from '../models/Municipe'

export class MunicipeRepository implements IMunicipeRepository {
  async create(data: Partial<MunicipeEntity>): Promise<MunicipeEntity> {
    const municipe = await Municipe.create(data)
    return new MunicipeEntity(municipe.id, municipe.name, municipe.provinceId)
  }

  async update(id: number, data: Partial<MunicipeEntity>): Promise<MunicipeEntity> {
    const municipe = await Municipe.findOrFail(id)
    municipe.merge(data)
    await municipe.save()
    return new MunicipeEntity(municipe.id, municipe.name, municipe.provinceId)
  }

  async delete(id: number): Promise<void> {
    const municipe = await Municipe.findOrFail(id)
    await municipe.delete()
  }

  async findAll(limit: number, page: number): Promise<MunicipeEntity[]> {
    const municipios = await Municipe.query().paginate(page, limit)
    return municipios.map((m) => new MunicipeEntity(m.id, m.name, m.provinceId))
  }

  async findById(id: number): Promise<MunicipeEntity | null> {
    const municipe = await Municipe.find(id)
    if (!municipe) return null
    return new MunicipeEntity(municipe.id, municipe.name, municipe.provinceId)
  }

  async findMunicipeByProvinceId(provinceId: number): Promise<MunicipeEntity[]> {
    const municipios = await Municipe.query().where('province_id', provinceId)
    return municipios.map((m) => new MunicipeEntity(m.id, m.name, m.provinceId))
  }

  async searchByName(name: string): Promise<MunicipeEntity[]> {
    const municipios = await Municipe.query().whereILike('name', `%${name}%`)
    return municipios.map((m) => new MunicipeEntity(m.id, m.name, m.provinceId))
  }
}
