// un componente es una etiqueta de html especializada
const RobotCard = ({robot}) => {
    const attack = (id) => {
        console.log('Has atacado al robot con el id', id);
    }

    return (
        <div className='robot-card'>
            <h2 >{robot.name}</h2>
            <p>Modelo: <span>{robot.model}</span></p>
            <p>Salud: <span>{robot.health}</span></p>
            <p>Estado: <span>{robot.status}</span></p>
            <button onClick={() => {
                attack(robot.id)
            }}>Atacar</button>
        </div>
    )
}

export default RobotCard;
