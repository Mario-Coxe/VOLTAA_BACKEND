import { IMunicipeRepository } from '../domain/repositories/IMunicipeRepository'
import { CreateMunicipeDTO } from '../domain/dtos/create-municipe-dtos'
import { MunicipeEntity } from '../domain/entities/MunicipeEntity'

export class CreateMunicipeUseCase {
  constructor(private municipeRepository: IMunicipeRepository) {}
  async execute(data: CreateMunicipeDTO): Promise<MunicipeEntity> {
    return this.municipeRepository.create(data)
  }
}
