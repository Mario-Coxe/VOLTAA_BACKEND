import { CreateMunicipeUseCase } from '../use-cases/create-municipe-use-case'
import { MunicipeService } from '../domain/services/MunicipeService'
import { MunicipeRepository } from '../infra/repositores/MunicipeRepository'
import CreateMunicipeController from '../infra/http/controllers/create-municipe-controller'

export default class MunicipeFactory {
  public static createMunicipeController(): CreateMunicipeController {
    const municipeRepository = new MunicipeRepository()
    const createMunicipeUseCase = new CreateMunicipeUseCase(municipeRepository)
    const municipeService = new MunicipeService(createMunicipeUseCase)
    return new CreateMunicipeController(municipeService)
  }
}
