import React, { useState } from 'react';
import axios from 'axios';
import { RobotsPresenter } from '../modules/robots/interface/RobotsPresenter';

const Home = () => {
  /* nos traemos la funcionalidad de la clase RobotsPresenter */
  const robotsPresenter = new RobotsPresenter();
  const [likes, setLikes] = useState(0);

  const [form, setForm] = useState({
    id: '',
    name: '',
    model: ''
  });

  const handleSubmitForm = (event) => {
    /* ejecutamos el metodo preventDefault para evitar que el navegador recargue */
    event.preventDefault();

    // ejecutamos el metodo createRobot que creamos en RobotsPresenter
    robotsPresenter.createRobot(form);
  }

  const handleChangeForm = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value
    });
  }

  /* Para atacar al robot el usuario escribe el id */

  /* mediante el boton submit el usuario ataca al robot */

  /* y si todo va bien mostramos en pantalla un ok todo bien */

  return (
    <div>

      <p>Has dado {likes} likes a </p>

      <button onClick={() => setLikes(likes + 1)}>Click me</button>
      <br /><br />

      <p>Mis datos son: </p>
      <ul>
        <li>id - {form.id}</li>
        <li>Nombre - {form.name}</li>
        <li>Modelo - {form.model}</li>
      </ul>

      <form onSubmit={handleSubmitForm}>
        <label>Id: </label>
        <input type="text" name="id" placeholder='Id' onChange={handleChangeForm} />
        <br /><br />
        <label>Nombre: </label>
        <input type="text" name="name" placeholder='Nombre' onChange={handleChangeForm} />
        <br /><br />
        <label>Modelo: </label>
        <input type="text" name="model" placeholder='Modelo' onChange={handleChangeForm} />
        <br /><br />

        <input type="submit" value="Enviar" />
      </form>

    </div>
  )
}

export default Home;