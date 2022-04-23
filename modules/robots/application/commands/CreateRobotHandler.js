import { Factory } from "../../domain/factory";
import { RobotRepository } from "../../infraestructure/repositories/RobotRepository";

export class CreateRobotHandler {
    constructor() {
        this.robotRepository = new RobotRepository();
    }

    async handle(command) {
        /* Crear un nuevo robot y mandarselo al backend */

        const robot = Factory.create({ id: command.id, name: command.name, model: command.model });

        await this.robotRepository.createRobot(robot);
    }

}