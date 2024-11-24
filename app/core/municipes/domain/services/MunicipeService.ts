import { IMunicipeService } from '../ports/IMunicipeService'
import { CreateMunicipeDTO } from '../dtos/create-municipe-dtos'
import { MunicipeEntity } from '../entities/MunicipeEntity'
import { CreateMunicipeUseCase } from '../../use-cases/create-municipe-use-case'

export class MunicipeService implements IMunicipeService {
  constructor(private createMunicipeUseCase: CreateMunicipeUseCase) {}

  async createMunicipe(data: CreateMunicipeDTO): Promise<MunicipeEntity> {
    return this.createMunicipeUseCase.execute(data)
  }
}
