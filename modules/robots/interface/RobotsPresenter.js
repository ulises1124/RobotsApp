import { CreateRobotCommand } from "../application/commands/CreateRobotCommand";
import { CreateRobotHandler } from "../application/commands/CreateRobotHandler";

export class RobotsPresenter {
    async createRobot(params){
        const command = new CreateRobotCommand(params);
        const handler = new CreateRobotHandler();
        await handler.handle(command);
    }
}