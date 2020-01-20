import React, {useState, useEffect} from 'react';
import api from './services/api';

import './global.css'
import './App.css'
import './Sidebar.css'
import './Main.css'

import DevItem from './components/DevItem';
import DevForm from './components/DevForm';

// Componente: bloco isolado de HTML, CSS e JS, o qual n interfere no restande da aplicacao
// Propriedade: Informacoes que o componente pai passa para o componente filho
// Estado : informacoes mantidas pelo componente (Lembrar: imutabilidade)


function App() {

  const [devs, setDevs] = useState([]);
  
    useEffect(() => {
        async function loadDevs() {
            const response = await api.get('/devs');

            setDevs(response.data)
        }

        loadDevs();
    }, []);

    async function handleAddDev(data) {
        const response = await api.post('/devs', data)


        setDevs([...devs, response.data])

    }

    return (
        <div id="app">
            <aside>
                <strong>Cadastrar</strong>
                <DevForm onSubmit={handleAddDev}></DevForm>
            </aside>
            <main>
                <ul> 
                  {devs.map(dev => (
                        <DevItem key={dev._id}  dev={dev}></DevItem>
                    ))} 
                    </ul>
            </main>
        </div>
    );
}

export default App;

