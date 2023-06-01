import {useState} from 'react';
import './App.css';
import {Form} from "./componentes/Form";
import {Card} from './componentes/Card';

function App() {
  //Aqui deberias agregar los estados y los handlers para los inputs
  const [animalesPreferidos, setAnimalesPreferidos] = useState([])


  function agregarAnimal(animal, nombre) {
  
    const nuevoAnimal = {
      animal,
      nombre,
    }
    setAnimalesPreferidos([...animalesPreferidos, nuevoAnimal])
  }

  return (
    <div className="App">
      <h1>Elige un animal</h1>
      <Form agregarAnimal={agregarAnimal} 
        />
      <div>
      {animalesPreferidos.map((animalPreferido) => {
          return (
            <Card
              key={animalPreferido.id}
              animal={animalPreferido.animal}
              nombre={animalPreferido.nombre}
              />
          )
        })}
      </div>
    </div>
  );
}

export default App