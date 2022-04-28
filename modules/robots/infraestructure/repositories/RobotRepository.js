import axios from "axios";

export class RobotRepository {
    async /* permite ejecutar funcionalidades que necesitan esperar */ createRobot(robot) {
        /* ejecutamos la funcion toProperties para acceder a sus propiedades */
        const props = robot.toProperties();

        /* Axios es un cliente http que sirve para conectar con el backend */
        await /* esperar */ axios.post('http://localhost:3001/robots', {
            id: props.id,
            name: props.name,
            model: props.model
        });
    }
}