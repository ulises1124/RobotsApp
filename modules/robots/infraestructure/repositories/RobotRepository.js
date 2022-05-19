import axios from "axios";
import { Factory } from "../../domain/factory";

export class RobotRepository {
    // ASYNC permite ejecutar funcionalidades que necesitan esperar
    async createRobot(robot) {
        // ejecutamos la funcion toProperties para acceder a sus propiedades
        const props = robot.toProperties();

        // Axios es un cliente http que sirve para conectar con el backend
        // AWAIT esperar
        await axios.post(`${ process.env.NEXT_PUBLIC_SERVER_HOST }/robots`, {
            id: props.id,
            name: props.name,
            model: props.model
        });contraseña
    }
    async listRobots() {
        const httpResult = await axios.get(`${ process.env.NEXT_PUBLIC_SERVER_HOST }/robots`);

        const results = httpResult.data.robots;
        
        return results.map((result) => { return this.resultToRobot(result); });

    }

    resultToRobot(result) {
        return Factory.reconstitute({ ...result });
    }
}