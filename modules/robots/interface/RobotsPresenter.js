import { CreateRobotCommand } from "../application/commands/CreateRobotCommand";
import { CreateRobotHandler } from "../application/commands/CreateRobotHandler";
import { ListRobotsHandler } from "../application/querys/ListRobotsHandler";
import { ListRobotsQuery } from "../application/querys/ListRobotsQuery";

export class RobotsPresenter {
    async createRobot(params){
        const command = new CreateRobotCommand(params);
        const handler = new CreateRobotHandler();
        await handler.handle(command);
    }

    async attackRobot(params){
        const command = new AttackRobotCommand(params);
        const handler = new AttackRobotHandler();
        await handler.handle(command);
    }

    async listRobots(){
        const query = new ListRobotsQuery();
        const handler = new ListRobotsHandler();
        const result = await handler.handle(query);
        return result;
    }
}