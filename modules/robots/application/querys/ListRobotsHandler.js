import { RobotRepository } from "../../infraestructure/repositories/RobotRepository";

export class ListRobotsHandler {
    constructor() {
        /* nos traemos la funcionalidad de la clase RobotRepository */
        this.robotRepository = new RobotRepository();
    }

    async handle(query) {
        // Listamos los robots
        const robots = await this.robotRepository.listRobots();
        return robots;
    }
}