import { useState, useEffect } from 'react';
import { RobotsPresenter } from '../../modules/robots/interface/RobotsPresenter';

const Robots = () => {
    const robotsPresenter = new RobotsPresenter();
    const [robots, setRobots] = useState([]);

    // Este hook o "metodo" se ejecuta al entar al componente 
    useEffect(() => {
        const fetch = async () => {
            // ejecutamos el metodo listRobots que creamos en RobotsPresenter para listar los robots
            const result = await robotsPresenter.listRobots();
            console.log('ahora si estamos en iterface grafica', result);
            setRobots(result);
        }
        fetch();
    }, []);
    return (
        <>
            <h1>Robots funcionando</h1>
            <ul>
                <li>id {robots[0]?.id}</li>
                <li>nombre {robots[0]?.name}</li>
            </ul>
        </>
    );
}

export default Robots;