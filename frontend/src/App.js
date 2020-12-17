import HelloWord from './components/HelloWord/HelloWord';
import MyJumbotron from './components/MyJumbotron';
import api from './services/api';
import React, {useState} from 'react';

import Table from 'react-bootstrap/Table';

import { Button } from 'react-bootstrap';

const App = () => {

  let [alunos, setAlunos] = useState([]);

  api.get('/pessoas').then(data => {
    setAlunos(result.data.dados);
    console.log(result);
  })

  return (
    <div>
      <MyJumbotron />
    </div>
  );
}

export default App;
