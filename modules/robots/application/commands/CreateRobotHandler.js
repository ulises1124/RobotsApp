import { Factory } from "../../domain/factory";
import { RobotRepository } from "../../infraestructure/repositories/RobotRepository";

export class CreateRobotHandler {
    constructor() {
        /* nos traemos la funcionalidad de la clase RobotRepository */
        this.robotRepository = new RobotRepository();
    }

    async handle(command) {
        /* Crear un nuevo robot a partir de los datos del formulario */
        const robot = Factory.create({ id: command.id, name: command.name, model: command.model });

        /* y lo almacenamos en el backend en esta instruccion */
        await this.robotRepository.createRobot(robot);
    }
}