import axios from "axios";

export class RobotRepository {
    async createRobot(robot) {
        const props = robot.toProperties();
        /* Axios es un cliente http que sirve para conectar con el backend */
        await axios.post('http://localhost:3001/robots', {
            id: props.id,
            name: props.name,
            model: props.model
        });
    }
}