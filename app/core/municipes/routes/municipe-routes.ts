import Route from '@ioc:Adonis/Core/Route'
import MunicipeFactory from '../factories/MunicipeFactory'
export default function municipeRoutes() {
  const createMunicipeController = MunicipeFactory.createMunicipeController()
  Route.group(() => {
    Route.post('/create', createMunicipeController.create.bind(createMunicipeController))
  }).prefix('/municipes')
}
