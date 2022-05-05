import { useState, useEffect } from 'react';
import { RobotsPresenter } from '../../modules/robots/interface/RobotsPresenter';
import RobotCard from '../../components/RobotCard';

const Robots = () => {
    const robotsPresenter = new RobotsPresenter();
    const [robots, setRobots] = useState([]);

    // Este hook o "metodo" se ejecuta al entar al componente ya renderizado por primera vez
    useEffect(() => {
        const fetch = async () => {
            // ejecutamos el metodo listRobots que creamos en RobotsPresenter para listar los robots
            const result = await robotsPresenter.listRobots();
            setRobots(result);
        }
        fetch();
    }, []);

    

    return (
        <>
            <h1>Robots funcionando</h1>

            <div className="robot-cards-container">

                {robots.map((robot, index) => {
                    return (
                        <RobotCard key={index} robot={robot} />
                    )
                })}

            </div>

        </>
    );
}

export default Robots;