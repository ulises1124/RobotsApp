import React, { useState } from 'react';
import axios from 'axios';
import { RobotsPresenter } from '../modules/robots/interface/RobotsPresenter';

const Home = () => {
  const robotsPresenter = new RobotsPresenter();
  const [likes, setLikes] = useState(0);

  const [form, setForm] = useState({
    id: '',
    name: '',
    model: ''
  });

  const handleSubmitForm = (event) => {
    event.preventDefault();

    robotsPresenter.createRobot(form);

    /*
    axios.post( 'http://localhost:3001/robots', form )
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
      */

  }

  const handleChangeForm = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value
    });
  }

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