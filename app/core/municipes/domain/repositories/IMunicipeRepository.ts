import { MunicipeEntity } from '../entities/MunicipeEntity'

export interface IMunicipeRepository {
  update(id: number, data: Partial<MunicipeEntity>): Promise<MunicipeEntity>
  delete(id: number): Promise<void>
  create(data: Partial<MunicipeEntity>): Promise<MunicipeEntity>
  findAll(limit: number, page: number): Promise<MunicipeEntity[]>
  findMunicipeByProvinceId(id: number): Promise<MunicipeEntity[]>
  searchByName(name: string): Promise<MunicipeEntity[]>
  findById(id: number): Promise<MunicipeEntity | null>
}
