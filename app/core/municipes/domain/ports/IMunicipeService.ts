import { CreateMunicipeDTO } from '../dtos/create-municipe-dtos'
import { MunicipeEntity } from '../entities/MunicipeEntity'
export interface IMunicipeService {
  createMunicipe(data: CreateMunicipeDTO): Promise<MunicipeEntity>
}
