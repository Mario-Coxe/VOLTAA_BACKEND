import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { MunicipeService } from 'App/core/municipes/domain/services/MunicipeService'
import CreateMunicipeValidator from '../validators/CreateMunicipeValidator'

export default class CreateMunicipeController {
  constructor(private service: MunicipeService) {}

  public async create({ request, response }: HttpContextContract) {
    try {
      const data = await request.validate(CreateMunicipeValidator)
      const municipe = await this.service.createMunicipe(data)
      return response.created(municipe)
    } catch (error) {
      return response.badRequest({ message: error.message, errors: error.messages })
    }
  }
}
